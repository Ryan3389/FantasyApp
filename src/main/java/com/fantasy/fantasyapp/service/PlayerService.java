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

    


//    public List<Player> findAllPlayersByTotalYears(int year) {
//       Optional<List<Player>> player =  playerRepository.findAllPlayersByYears(year);
//
//       return player.orElse(null);
//    }
    // Get players by team
        // Get players by condition - years
            // hr, hits, stolen bases, etc over X amount
        // Get players by hall of fame
        // Get players by not hall of fame


}
