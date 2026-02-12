package com.FileDataSendOrRecieve.repository;

import com.FileDataSendOrRecieve.entity.Records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordsRepository extends JpaRepository<Records, Integer> {
}
