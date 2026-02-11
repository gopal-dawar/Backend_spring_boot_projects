package com.MovieTicketBookingSystem.repository;

import com.MovieTicketBookingSystem.entity.Tickets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends JpaRepository<Tickets, Integer> {

    @Query(value = "Select * from where cuName = :cuName")
    public Tickets findByName(@Param("cuName") String cuName);
}
