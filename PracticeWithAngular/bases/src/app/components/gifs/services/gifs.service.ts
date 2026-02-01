import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal, Signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';
import { map, Observable, tap } from 'rxjs';

const GIF_KET = 'gifSearchHistoryInLocalStorage';

const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KET) ?? '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    console.log('Loaded gifs from local storage:', gifs);
    return gifs;

}

@Injectable({providedIn: 'root'})
export class GifsService {
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]> ([]);
    trendingGifsLoading = signal(true);

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        this.loadTrendingGifs();
    }

    saveGifToLocalStorage = effect(() => {
        const historyString = JSON.stringify(this.searchHistory());
        localStorage.setItem('gifSearchHistoryInLocalStorage', historyString);
    });

    loadTrendingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyAPIUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyAPIKey,
                limit: '25'
            }
        }).subscribe(response => {
            const gifs = GifMapper.mapGhiphyItemsToGifs(response.data);
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
        });
    }

    searchGifs(query: string): Observable<Gif[]> {
        return this.http.get<GiphyResponse>(`${environment.giphyAPIUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyAPIKey,
                q: query,
                limit: '25'
            }
        }).pipe(
            // Map the response to Gif[]
            map(response => GifMapper.mapGhiphyItemsToGifs(response.data)),
            tap(gifs => {
                this.searchHistory.update(history => ({
                    ...history,
                    [query.toLowerCase()]: gifs
                }));
            }
        ));
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query.toLowerCase()] || [];
    }

}