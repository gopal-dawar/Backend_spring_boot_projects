package com.FileDataSendOrRecieve.controller;


import com.FileDataSendOrRecieve.entity.Records;
import com.FileDataSendOrRecieve.helper.HelperClass;
import com.FileDataSendOrRecieve.service.RecordsService;
import lombok.experimental.Helper;
import org.apache.poi.ss.usermodel.Header;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("*")
public class RecordsController {

    @Autowired
    RecordsService recordsService;

    @PostMapping("/saveExcel")
    public ResponseEntity<String> saveExcel(@RequestParam("file") MultipartFile file) {


        String msg = recordsService.saveExcelDataInDatabase(file);


        return new ResponseEntity<>(msg, HttpStatus.OK);
    }


    @GetMapping("getData/download")
    public ResponseEntity<byte[]> getExcelSheet() {

//        get list of records
        List<Records> list = recordsService.getData();


//        list to excel byte file

        byte[] file = HelperClass.convertDatabaseDataToExcelFile(list);

        HttpHeaders headers = new HttpHeaders();

        headers.setContentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"));
        headers.setContentDisposition(ContentDisposition.attachment().filename("StudentRecords.xlsx").build());


        return new ResponseEntity<>(file, headers, HttpStatus.OK);
    }

}
