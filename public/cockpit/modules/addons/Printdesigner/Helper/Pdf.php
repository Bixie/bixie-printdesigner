<?php

namespace Printdesigner\Helper;

class Pdf extends \Lime\Helper {

	public function initialize () {


	}

	public function fromSvg ($svgFile, $outputFile) {
		// Include the main TCPDF library (search for installation path).
		require_once(dirname(__DIR__) . '/vendor/tcpdf/tcpdf.php');

		// create new PDF document
		$pdf = new \TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

		// set document information
		$pdf->SetCreator(PDF_CREATOR);
		$pdf->SetAuthor('Bixie');
		$pdf->SetTitle('');
		$pdf->SetSubject('');
		$pdf->SetKeywords('');

		// set default header data
		//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 058', PDF_HEADER_STRING);

		// set header and footer fonts
//		$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
//		$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

		// set default monospaced font
		$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

		// set margins
		$pdf->SetMargins(0, 0, 0);
		$pdf->SetHeaderMargin(0);
		$pdf->SetFooterMargin(0);

		// set auto page breaks
		$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

		// set image scale factor
		$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);


		// ---------------------------------------------------------

		// set font
		$pdf->SetFont('helvetica', '', 10);

		// add a page
		$pdf->AddPage();

		// NOTE: Uncomment the following line to rasterize SVG image using the ImageMagick library.
		//$pdf->setRasterizeVectorImages(true);

		$pdf->ImageSVG($svgFile, $x = 0, $y = 0, $w = '', $h = '', $link = '', $align = '', $palign = '', $border = 0, $fitonpage = false);

//		$pdf->SetFont('helvetica', '', 8);
//		$pdf->SetY(195);
//		$txt = '© The copyright holder of the above Tux image is Larry Ewing, allows anyone to use it for any purpose, provided that the copyright holder is properly attributed. Redistribution, derivative work, commercial use, and all other use is permitted.';
//		$pdf->Write(0, $txt, '', 0, 'L', true, 0, false, false, 0);

		// ---------------------------------------------------------

		//Close and output PDF document
		$pdf->Output($outputFile, 'F');
	}
}