package com.MovieTicketBookingSystem.service;

import com.MovieTicketBookingSystem.entity.Tickets;

import java.util.List;

public interface TicketService {

    Tickets addNewTickets(Tickets tickets);

    List<Tickets> viewTickets();

    Tickets updateNumberofSeats(int id, Tickets tickets);

    Tickets removeTicketsByName(String cuName);

}
