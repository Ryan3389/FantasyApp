package com.fantasy.fantasyapp.repository;


import com.fantasy.fantasyapp.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByPlayer(String playerName);
    Optional<Player> findByPlayer(String player);
    List<Player> findByHomeRunsGreaterThanEqual(int homeRuns);
    List<Player> findByHitsGreaterThanEqual(int hits);
}
