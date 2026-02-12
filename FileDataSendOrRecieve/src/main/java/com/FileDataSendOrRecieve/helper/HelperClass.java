package com.FileDataSendOrRecieve.helper;


import com.FileDataSendOrRecieve.entity.Records;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class HelperClass {


    public static boolean checkExcelFileData(MultipartFile file) {
        String contentType = file.getContentType();
        if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            return true;
        } else {
            return false;
        }
    }


    public static List<Records> excelFileDataTolistOFRecord(InputStream is) {

        List<Records> list = new ArrayList<>();
        try {
            XSSFWorkbook sheets = new XSSFWorkbook(is);

            XSSFSheet datasheet = sheets.getSheetAt(0);

            Iterator<Row> rows = datasheet.iterator();

            DataFormatter formatter = new DataFormatter();

            boolean isHeader = true;

            while (rows.hasNext()) {
                Row row = rows.next();

                // ✅ skip header
                if (isHeader) {
                    isHeader = false;
                    continue;
                }

                Records r = new Records();

                String name = formatter.formatCellValue(row.getCell(0));
                String ageStr = formatter.formatCellValue(row.getCell(1));
                String gender = formatter.formatCellValue(row.getCell(2));
                String department = formatter.formatCellValue(row.getCell(3));
                String yearStr = formatter.formatCellValue(row.getCell(4));
                String email = formatter.formatCellValue(row.getCell(5));
                String phoneStr = formatter.formatCellValue(row.getCell(6));
                String city = formatter.formatCellValue(row.getCell(7));

                // ✅ skip empty rows
                if (name == null || name.isBlank()) {
                    continue;
                }

                r.setName(name);
                r.setGender(gender);
                r.setDepartment(department);
                r.setEmail(email);
                r.setCity(city);

                // ✅ safe number conversion
                r.setAge(ageStr.isEmpty() ? 0 : Integer.parseInt(ageStr));
                r.setYear(yearStr.isEmpty() ? 0 : Integer.parseInt(yearStr));
                r.setPhone(phoneStr.isEmpty() ? 0L : Long.parseLong(phoneStr));

                list.add(r);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        return list;
    }


    public static byte[] convertDatabaseDataToExcelFile(List<Records> list) {

        ByteArrayOutputStream excelfile = new ByteArrayOutputStream();
        Workbook sheet = new XSSFWorkbook();
        Sheet s = sheet.createSheet("StudentRecords");


        Row r1 = s.createRow(0);
        r1.createCell(0).setCellValue("Name");
        r1.createCell(1).setCellValue("Age");
        r1.createCell(2).setCellValue("Gender");
        r1.createCell(3).setCellValue("Department");
        r1.createCell(4).setCellValue("Year");
        r1.createCell(5).setCellValue("Email");
        r1.createCell(6).setCellValue("Phone");
        r1.createCell(7).setCellValue("City");

        int rowindex = 1;
        for (Records re : list) {
            Row r2 = s.createRow(rowindex++);
            r2.createCell(0).setCellValue(re.getName());
            r2.createCell(1).setCellValue(re.getAge());
            r2.createCell(2).setCellValue(re.getGender());
            r2.createCell(3).setCellValue(re.getDepartment());
            r2.createCell(4).setCellValue(re.getYear());
            r2.createCell(5).setCellValue(re.getEmail());
            r2.createCell(6).setCellValue(re.getPhone());
            r2.createCell(7).setCellValue(re.getCity());


        }
        try {
            sheet.write(excelfile);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return excelfile.toByteArray();
    }


}


