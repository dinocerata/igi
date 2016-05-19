function get_writeStyle(){
    var s = "<style type='text/css'>";
	s += "#div_atas{text-align:left;border-radius:4px 14px 0 0;-moz-border-radius:4px 14px 0 0;-webkit-border-radius:4px 14px 0 0;background:" + opt_warna_background + ";padding-left:5px;width:auto}";
	s += "#div_tengah{text-align:left;width:auto;border:1px solid " + opt_warna_background + ";font-family:arial;font-size:x-small;background:white;padding:2px}";
	s += ".text_atas,.text_atas A,.text_atas A:link,.text_atas A:hover{color:"+ opt_warna_huruf + ";font-family:verdana;font-size:small;font-weight:700;text-decoration:none}";
	s += "#div_bawah{text-align:right;width:auto;border-radius:0 0 4px 14px;-moz-border-radius:0 0 4px 14px;-webkit-border-radius:0 0 4px 14px;background:" + opt_warna_background + ";padding-right:5px}";
	s += ".text_bawah,.text_bawah A,.text_bawah A:link,.text_bawah A:hover{color:" + opt_warna_huruf + ";font-family:verdana;font-size:x-small;font-weight:700;text-decoration:none}";
	s += "span.blogatas,span.blogatas A,span.blogatas A:link,span.blogatas A:hover {color:" + opt_warna_huruf + "; font-family:verdana; font-size:small; font-weight:bold; text-decoration:none; } ";
	s += "span.blogbawah,span.blogbawah A,span.blogbawah A:link,span.blogbawah A:hover {color:" + opt_warna_huruf + "; font-family:verdana; font-size:x-small; font-weight:bold; text-decoration:none; } ";
	s += "span.headline,span.headline A:link,span.headline A{color:#00000;font-family:verdana;font-size:small;font-weight:700;text-decoration:none}span.headline A:hover{color:red;font-family:verdana;font-size:small;font-weight:700;text-decoration:none}div#creditfooter{display:none}div.feedburnerFeedBlock ul{list-style-type:none;padding:0}.feedTitle,.feedTitle A:link,.feedTitle A{color:#000;font-family:verdana;font-size:small;font-weight:700;text-decoration:none}.feedTitle A:hover{color:blue;font-family:verdana;font-size:small;font-weight:700;text-decoration:none}";
    s += "</style>";
    document.write(s);
}
get_writeStyle();
