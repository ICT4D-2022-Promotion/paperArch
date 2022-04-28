package com.ocrPackage.com;

import java.io.PrintWriter;

public class Ocr {


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 String input_file="C:\\Users\\noeKen\\Downloads\\releve.png";
		 String output_file="C:\\Users\\noeKen\\Downloads\\ocrFile";
		 String tesseract_install_path="C:\\Program Files\\Tesseract-OCR\\tesseract";
		 String[] command =
		    {
		        "cmd",
		    };
		    Process p;
		 try {
		 p = Runtime.getRuntime().exec(command);
		        new Thread(new SyncPipe(p.getErrorStream(), System.err)).start();
		        new Thread(new SyncPipe(p.getInputStream(), System.out)).start();
		        PrintWriter stdin = new PrintWriter(p.getOutputStream());
		        stdin.println("\""+tesseract_install_path+"\" \""+input_file+"\" \""+output_file+"\" -l fra");
		        stdin.close();
		        p.waitFor();
		        System.out.println();
		        System.out.println();
		        System.out.println();
		        System.out.println();
		       System.out.println(Read_File.read_a_file(output_file+".txt"));
		    } catch (Exception e) {
		 e.printStackTrace();
		    }
		  }
	


}