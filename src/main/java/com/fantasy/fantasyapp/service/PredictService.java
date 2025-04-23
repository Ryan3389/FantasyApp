package com.fantasy.fantasyapp.service;

import com.fantasy.fantasyapp.dto.PredictDTO;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class PredictService {
    private WebClient webClient = WebClient.create();

    public Mono<String> predictPlayerHOF(String url, PredictDTO data) {
        return webClient.post()
                .uri(url)
                .contentType(MediaType.APPLICATION_JSON)
                .body(Mono.just(data), PredictDTO.class)
                .retrieve()
                .bodyToMono(String.class);
    }
}
