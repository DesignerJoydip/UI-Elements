<?php

//Get a list of file paths using the glob function.
$fileList = glob('test/*');
 
//Loop through the array that glob returned.
foreach($fileList as $filename){
   //Simply print them out onto the screen.
   echo $filename, '<br>'; 
}

echo "<hr>";

foreach($fileList as $filename){
    //Use the is_file function to make sure that it is not a directory.
    if(is_file($filename)){
        echo $filename, '<br>'; 
    }   
}

echo "<hr>";

$dir = 'test';


function listFolderFiles($dir)
{
    echo '<ol>';
    foreach (new DirectoryIterator($dir) as $fileInfo) {
        if (!$fileInfo->isDot()) {
            //echo $fileInfo->getFilename();
            if (preg_match('/^.*\.([^.]+)$/D', $fileInfo)) {
                //echo "$fileInfo\n";
                //echo 'is a file';
                echo '<li><img width="20px" src="https://image.flaticon.com/icons/svg/1001/1001259.svg"><a href="'. $dir."/".$fileInfo->getFilename().'">' . $fileInfo->getFilename();
                if ($fileInfo->isDir()) {
                    listFolderFiles($fileInfo->getPathname());
                }
                echo ' ---- is a file';
                echo '</a></li>';
            }else{
                echo '<li><img width="20px" src="https://image.flaticon.com/icons/svg/891/891094.svg"><a href="'. $dir."/".$fileInfo->getFilename().'">' . $fileInfo->getFilename();
                echo ' ---- is a dir';
                if ($fileInfo->isDir()) {
                    listFolderFiles($fileInfo->getPathname());
                }
                echo '</a></li>';
            }
        }
        
    }
    echo '</ol>';
}
listFolderFiles($dir);


echo "<hr>";

$path = 'test';
if (is_dir($path)){
    if($objDir = opendir(".")) {
        while(($item = readdir($objDir)) !== false) {
            if(is_dir($item) && $item != "." && $item != "..") {
                echo $item." is a directory";
                echo '<br>';

        }elseif(is_file($item)) {
            echo $item." is a file";
            echo '<br>';
        }
    }
    closedir($objDir);
    }
}


/*
if (is_dir($path)){
    if ($dh = opendir($path)){
      while (($file = readdir($dh)) !== false){
        if(is_dir($file) && $file != "." && $file != "..") {
            echo "File:" . $file . "<br/>";
        }
      }
      //closing the directory
      closedir($dh);
    }
  }
*/
echo "<hr>";


?>