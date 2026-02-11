package com.MovieTicketBookingSystem.controller;


import com.MovieTicketBookingSystem.entity.Tickets;
import com.MovieTicketBookingSystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("tickets")
public class TicketController {

    @Autowired
    TicketService ticketService;


    @PostMapping("/save")
    public ResponseEntity<Tickets> saveTickets(@RequestBody Tickets tickets) {
        return new ResponseEntity<>(ticketService.addNewTickets(tickets), HttpStatus.CREATED);
    }


    @GetMapping("/viewtickets")
    public ResponseEntity<List<Tickets>> viewTickets() {
        return new ResponseEntity<>(ticketService.viewTickets(), HttpStatus.FOUND);
    }


    @PostMapping("/update-by-id/{id}")
    public ResponseEntity<Tickets> updatetickets(@PathVariable int id, @RequestBody Tickets tickets) {
        Tickets t1 = ticketService.updateNumberofSeats(id, tickets);
        return new ResponseEntity<>(t1, HttpStatus.OK);
    }

    @GetMapping("/delete-by-name/{cuName}")
    public ResponseEntity<Tickets> deletebyName(@PathVariable String cuName) {
        Tickets t1 = ticketService.removeTicketsByName(cuName);
        return new ResponseEntity<>(t1, HttpStatus.FOUND);
    }


}
