Punkt "Verwalten" um _phpmyadmin_ zu öffnen

Folgende Tabellen exportieren:
{code}
    'sys_category',
    'sys_category_record_mm',
    'sys_file',
    'sys_file_metadata',
    'sys_file_reference',
    'tt_content',
    'tx_news_domain_model_news',
    'tx_news_domain_model_news_related_mm',
    'tx_news_domain_model_news_tag_mm',
    'tx_news_domain_model_news_ttcontent_mm',
    'tx_news_domain_model_tag',
    'tx_news_domain_model_link',
{code}
vgl. auch: https://github.com/ext-news/news_sync

Dann über das Dropdown "markierte..." den Punkt "Exportieren" wählen (Vorsicht: auf dem Screenshot sind nicht alle Tabellen die angehakt wurden zu sehen, vgl. Liste hier drüber!):

Folgenden Code in der AdditionalConfiguration.php des Projekts (Repository rm-dist, Pfad web/typo3conf/) hinzufügen:
{code}
$importKey = 'sync';
$importTables = [
    'sys_category',
    'sys_category_record_mm',
    'sys_file',
    'sys_file_metadata',
    'sys_file_reference',
    'tt_content',
    'tx_news_domain_model_news',
    'tx_news_domain_model_news_related_mm',
    'tx_news_domain_model_news_tag_mm',
    'tx_news_domain_model_news_ttcontent_mm',
    'tx_news_domain_model_tag',
    'tx_news_domain_model_link',
];

$customChanges['DB']['Connections'][$importKey] = [
    'dbname' => $importKey,
    'driver' => 'mysqli',
    'host' => 'mysql',
    'password' => getenv('MYSQL_PASSWORD'),
    'port' => 3306,
    'user' => 'root',
];

foreach ($importTables as $importTable) {
    $tbl = $importKey . '_' . $importTable;

    $customChanges['DB']['TableMapping'][$tbl] = $importKey;
}

$GLOBALS['TYPO3_CONF_VARS'] = array_replace_recursive($GLOBALS['TYPO3_CONF_VARS'], $customChanges);
{code}

vgl. auch: https://github.com/ext-news/news_sync

vendor/bin/typo3cms news:sync
vendor/bin/typo3cms news:imagesync

UPDATE tx_news_domain_model_news SET pid=82 WHERE pid=54;
UPDATE sys_category SET pid=82 WHERE pid=54 OR pid=79;
