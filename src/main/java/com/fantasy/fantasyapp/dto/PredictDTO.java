package com.fantasy.fantasyapp.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PredictDTO {
    @JsonProperty
    private int YRS;

    @JsonProperty
    private int G;

    @JsonProperty
    private int H;

    @JsonProperty
    private int doubles;

    @JsonProperty
    private int HR;

    @JsonProperty
    private int RBI;

    @JsonProperty
    private double BA;
}
