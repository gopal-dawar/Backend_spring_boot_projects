package com.MovieTicketBookingSystem.serviceimpl;

import com.MovieTicketBookingSystem.entity.Tickets;
import com.MovieTicketBookingSystem.repository.TicketRepository;
import com.MovieTicketBookingSystem.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImpl implements TicketService {

    @Autowired
    TicketRepository ticketRepository;

    @Override
    public Tickets addNewTickets(Tickets tickets) {
        return ticketRepository.save(tickets);
    }

    @Override
    public List<Tickets> viewTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Tickets updateNumberofSeats(int id, Tickets tickets) {

        Tickets t = ticketRepository.findById(id).orElseThrow();

        t.setSeatsBooked(tickets.getSeatsBooked());

        t.setMovieName(tickets.getMovieName());

        t.setShowTime(tickets.getShowTime());

        return ticketRepository.save(t);
    }

    @Override
    public Tickets removeTicketsByName(String cuName) {

        Tickets existing = ticketRepository.findByName(cuName);
        ticketRepository.delete(existing);
        return existing;
    }
}
