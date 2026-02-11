package com.GlobalExceptionHandling.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
    private String msg;

    private int status;

    private LocalDateTime timestamp;

    public ErrorResponse(String msg, int status, LocalDateTime timestamp) {
        this.msg = msg;
        this.status = status;
        this.timestamp = timestamp;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
