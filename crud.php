<?php
include 'db.php';

$File = $_POST['action'] ?? '';

if ($File = $_POST['action'] ?? '';
 == 'fetch') {
    $sql = "SELECT * FROM tblsections WHERE Status='Active' ORDER BY DateTimeInserted DESC";
    $result = $conn->query($sql);
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
}

if ($File == 'add') {
    $SectionsUId = uniqid('SEC_');
    $TitleName = $_POST['TitleName'];
    $SubtitleName = $_POST['SubtitleName'];
    $Description = $_POST['Description'];
    $ImageUrl = $_POST['ImageUrl'];

    $sql = "INSERT INTO tblsections (SectionsUId, TitleName, SubtitleName, Description, ImageUrl) 
            VALUES ('$SectionsUId', '$TitleName', '$SubtitleName', '$Description', '$ImageUrl')";
    echo ($conn->query($sql)) ? 'success' : 'error';
}

if ($File == 'update') {
    $SectionsId = $_POST['SectionsId'];
    $TitleName = $_POST['TitleName'];
    $SubtitleName = $_POST['SubtitleName'];
    $Description = $_POST['Description'];
    $ImageUrl = $_POST['ImageUrl'];

    $sql = "UPDATE tblsections SET 
            TitleName='$TitleName', SubtitleName='$SubtitleName', 
            Description='$Description', ImageUrl='$ImageUrl', 
            DateTimeUpdated=NOW() WHERE SectionsId=$SectionsId";
    echo ($conn->query($sql)) ? 'success' : 'error';
}

if ($File == 'delete') {
    $SectionsId = $_POST['SectionsId'];
    $sql = "UPDATE tblsections SET Status='Deleted' WHERE SectionsId=$SectionsId";
    echo ($conn->query($sql)) ? 'success' : 'error';
}
?>
