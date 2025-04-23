package com.fantasy.fantasyapp.controllers;

import com.fantasy.fantasyapp.dto.PredictDTO;
import com.fantasy.fantasyapp.service.PredictService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/predict")
public class PredictControllers {
    private final PredictService predictService;

    public PredictControllers(PredictService predictService) {
        this.predictService = predictService;
    }

    @PostMapping("/stats")
    public ResponseEntity<String> Predict(@RequestBody PredictDTO predictDTO) {
        String url = "https://python-predict.onrender.com/api/predict";

        String response = predictService.predictPlayerHOF(url, predictDTO).block();

        return ResponseEntity.ok(response);
    }

}
