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
            echo '<li><a href="'. $dir."/".$fileInfo->getFilename().'">' . $fileInfo->getFilename();
            if ($fileInfo->isDir()) {
                listFolderFiles($fileInfo->getPathname());
            }
            echo '</a></li>';
        }
    }
    echo '</ol>';
}
listFolderFiles('test');

echo "<hr>";


?>