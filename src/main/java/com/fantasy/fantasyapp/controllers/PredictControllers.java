package com.fantasy.fantasyapp.controllers;

import com.fantasy.fantasyapp.dto.PredictDTO;
import com.fantasy.fantasyapp.service.PredictService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/players")
public class PredictControllers {
    private final PredictService predictService;

    public PredictControllers(PredictService predictService) {
        this.predictService = predictService;
    }

    @PostMapping("/predict")
    public ResponseEntity<String> Predict(@RequestBody PredictDTO predictDTO) {
        String url = "http://localhost:5000/api/predict";

        String response = predictService.predictPlayerHOF(url, predictDTO).block();

        return ResponseEntity.ok(response);
    }

}
