package com.fantasy.fantasyapp.controllers;

import com.fantasy.fantasyapp.dto.PlayerSearchDTO;
import com.fantasy.fantasyapp.model.Player;
import com.fantasy.fantasyapp.repository.PlayerRepository;
import com.fantasy.fantasyapp.service.PlayerService;
import org.apache.coyote.Request;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/players")
public class PlayerControllers {


    private final PlayerService playerService;

    public PlayerControllers(PlayerService playerService) {
        this.playerService = playerService;
    }
    @GetMapping("/getAllPlayers")
    public ResponseEntity<List<Player>> findAllPlayers(){
        return ResponseEntity.ok(playerService.findAllPlayers());
    }

    @PostMapping("/searchSinglePlayer")
    public ResponseEntity<Player> findSinglePlayer(@RequestBody PlayerSearchDTO playerSearchDTO){
        return ResponseEntity.ok(playerService.findPlayerByPlayer(playerSearchDTO.getPlayer()));
    }

    @GetMapping("/totalHomeRuns")
    public ResponseEntity<List<Player>> getPlayersByHomeRuns(@RequestParam int homeRuns){
        return ResponseEntity.ok(playerService.getPlayersByHomeRuns(homeRuns));
    }

   @GetMapping("/totalStolenBases")
   public ResponseEntity<List<Player>> getPlayersByStolenBases(@RequestParam int stolenBases){
        return ResponseEntity.ok(playerService.getPlayersByStolenBases(stolenBases));
   }

    @GetMapping("/totalHits")
    public ResponseEntity<List<Player>> getPlayersByHits(@RequestParam int hits){
        return ResponseEntity.ok(playerService.getPlayersByHits(hits));
    }

    @GetMapping("/totalYears")
    public ResponseEntity<List<Player>> getPlayersByYears(@RequestParam int years){
        return ResponseEntity.ok(playerService.getPlayersByYears(years));
    }

    @GetMapping("/hallOfFame")
    public ResponseEntity<List<Player>> getPlayersByHallOfFame(@RequestParam int HOF){
        return ResponseEntity.ok(playerService.getPlayersByHallOfFame(HOF));
    }
}
