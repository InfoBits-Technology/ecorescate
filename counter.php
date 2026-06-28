<?php
$file = __DIR__ . '/counter_data.json';
$data = ['count' => 0];
if (file_exists($file)) {
  $data = json_decode(file_get_contents($file), true) ?: $data;
}
if (isset($_GET['hit'])) {
  $data['count']++;
  file_put_contents($file, json_encode($data));
}
header('Content-Type: application/json');
echo json_encode(['value' => $data['count']]);
