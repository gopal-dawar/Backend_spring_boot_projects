package com.FileDataSendOrRecieve.service;

import com.FileDataSendOrRecieve.entity.Records;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface RecordsService {

    String saveExcelDataInDatabase(MultipartFile file);

    List<Records> getData();

}
