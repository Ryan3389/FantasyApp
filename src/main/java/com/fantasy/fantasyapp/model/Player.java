package com.fantasy.fantasyapp.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "player_stats")
@Getter
@Setter
public class Player {
    @Id
    private String player;

    private int years;

    private int games;

    @Column(name = "at_bats")
    private int atBats;

    private int runs;

    private int hits;

    private int doubles;

    private int triples;

    @Column(name = "home_runs")
    private int homeRuns;

    private int rbi;

    @Column(name = "base_on_balls")
    private int baseOnBalls;

    @Column(name = "strike_outs")
    private int strikeOuts;

    @Column(name = "stolen_bases")
    private int stolenBases;

    @Column(name = "caught_stealing")
    private int caughtStealing;

    @Column(name = "batting_average")
    private int battingAverage;

    @Column(name = "hall_of_fame")
    private int hallOfFame;


    public Player() {
    }

    public Player(int years, String player, int games, int atBats, int runs, int doubles, int hits, int triples, int homeRuns, int rbi, int baseOnBalls, int strikeOuts, int stolenBases, int caughtStealing, int battingAverage, int hallOfFame) {
        this.years = years;
        this.player = player;
        this.games = games;
        this.atBats = atBats;
        this.runs = runs;
        this.doubles = doubles;
        this.hits = hits;
        this.triples = triples;
        this.homeRuns = homeRuns;
        this.rbi = rbi;
        this.baseOnBalls = baseOnBalls;
        this.strikeOuts = strikeOuts;
        this.stolenBases = stolenBases;
        this.caughtStealing = caughtStealing;
        this.battingAverage = battingAverage;
        this.hallOfFame = hallOfFame;
    }

    public Player(String player) {
        this.player = player;
    }
}
