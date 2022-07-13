package com.budgetapp.api;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
public class FinancialEvent {

    @Id
    @GeneratedValue( strategy= GenerationType.AUTO )
    private Long id;

    // user is the user a financial event is associated with.
    private @ManyToOne User user;
    private LocalDateTime date;
    private BigDecimal amount;
    private String type;
    private String description;

    FinancialEvent() {
    }

    FinancialEvent(Long id, User user, LocalDateTime date, BigDecimal amount, String type, String description) {
        this.id = id;
        this.user = user;
        this.date = date;
        this.amount = amount;
        this.type = type;
        this.description = description;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof FinancialEvent))
            return false;
        FinancialEvent financialEvent = (FinancialEvent) o;
        return Objects.equals(this.id, financialEvent.id)
                && Objects.equals(this.user, financialEvent.user)
                && Objects.equals(this.date, financialEvent.date)
                && Objects.equals(this.amount, financialEvent.amount)
                && Objects.equals(this.type, financialEvent.type)
                && Objects.equals(this.description, financialEvent.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.user, this.date, this.amount, this.type, this.description);
    }

    @Override
    public String toString() {
        return "FinancialEvent{" + "id=" + this.id
                + ", user='" + this.user + '\''
                + ", date='" + this.date + '\''
                + ", amount='" + this.amount + '\''
                + ", type='" + this.type + '\''
                + ", description='" + this.description + '\''
                +'}';
    }
}
