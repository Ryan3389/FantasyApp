package com.fantasy.fantasyapp.service;

import com.fantasy.fantasyapp.dto.PlayerSearchDTO;
import com.fantasy.fantasyapp.model.Player;
import com.fantasy.fantasyapp.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    // Get all players
    public List<Player> findAllPlayers() {
        return playerRepository.findAll();
    }

    // Get players by name
    public Player findPlayerByPlayer(String playerName) {
        Optional<Player> player = playerRepository.findByPlayer(playerName);
        return player.orElse(null);
    }

    // Get player by total hits
    public List<Player> getPlayersByHits(int hits) {
        return playerRepository.findByHitsGreaterThanEqual(hits);
    }

    // Get player by stolen bases
    public List<Player> getPlayersByStolenBases(int stolenBases) {
        return playerRepository.findByStolenBasesGreaterThanEqual(stolenBases);
    }

    // Get player by total home runs
    public List<Player> getPlayersByHomeRuns(int homeRuns) {
//        return playerRepository.findByHomeRunsGreaterThanOrEqualTo(homeRuns);
        return playerRepository.findByHomeRunsGreaterThanEqual(homeRuns);
    }

    // Get player by years
    public List<Player> getPlayersByYears(int years) {
        return playerRepository.findByYearsGreaterThanEqual(years);
    }

    // Get player by HOF
    public List<Player> getPlayersByHallOfFame(int HOF) {
        return playerRepository.findByHallOfFame(HOF);
    }



}
