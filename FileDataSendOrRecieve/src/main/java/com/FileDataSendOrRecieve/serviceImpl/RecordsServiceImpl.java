package com.FileDataSendOrRecieve.serviceImpl;

import com.FileDataSendOrRecieve.entity.Records;
import com.FileDataSendOrRecieve.helper.HelperClass;
import com.FileDataSendOrRecieve.repository.RecordsRepository;
import com.FileDataSendOrRecieve.service.RecordsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class RecordsServiceImpl implements RecordsService {


    @Autowired
    RecordsRepository recordsRepository;


    @Override
    public String saveExcelDataInDatabase(MultipartFile file) {
        try {
            List<Records> list = HelperClass.excelFileDataTolistOFRecord(file.getInputStream());
            recordsRepository.saveAll(list);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Data Successfully Added";
    }

    @Override
    public List<Records> getData() {
        List<Records> list = recordsRepository.findAll();
        return list;
    }
}
