/ruhmesmeile/projects/team
/ruhmesmeile/projects/team/bonn
/ruhmesmeile/projects/team/bonn/review
/ruhmesmeile/projects/team/bonn/review/typo3
/ruhmesmeile/projects/team/bonn/review/typo3/orbit
/ruhmesmeile/projects/team/bonn/review/typo3/wolfcraft
/ruhmesmeile/projects/team/bonn/review/typo3/fll
/ruhmesmeile/projects/team/bonn/review/typo3/kalenborn
/ruhmesmeile/projects/team/bonn/review/typo3/kbap
/ruhmesmeile/projects/team/bonn/review/typo3/kbav
/ruhmesmeile/projects/team/bonn/review/typo3/mvz
/ruhmesmeile/projects/team/bonn/review/typo3/sbm
/ruhmesmeile/projects/team/bonn/review/typo3/goll
/ruhmesmeile/projects/team/bonn/review/typo3/greengate
/ruhmesmeile/projects/team/bonn/review/typo3/amerkamp
/ruhmesmeile/projects/team/bonn/review/typo3/sprengnetter
/ruhmesmeile/projects/team/bonn/review/typo3/sprengnetterat
/ruhmesmeile/projects/team/bonn/review/typo3/sprengnettercom
/ruhmesmeile/projects/team/bonn/review/solr/
/ruhmesmeile/projects/team/bonn/review/solr/orbit { extSolr: '7.5.3', rmSolr: '4.10.9', solr: '6.6.3', dockerExtSolr: '7.5.2'  }
/ruhmesmeile/projects/team/bonn/review/solr/wolfcraft { extSolr: '7.5.3', rmSolr: '5.0.7', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/bonn/review/solr/fll { extSolr: '10.0.1', rmSolr: '4.10.8', solr: '8.2.0', dockerExtSolr: '10.0.1' }
/ruhmesmeile/projects/team/bonn/review/solr/goll { extSolr: '7.5.3', rmSolr: '4.10.9', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/bonn/review/solr/kbap { extSolr: '7.5.3', rmSolr: '4.7.1', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/bonn/review/solr/kbav { extSolr: '7.5.3', rmSolr: '4.7.1', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/bonn/review/solr/mvz { extSolr: '7.5.3', rmSolr: '4.7.1', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/bonn/review/solr/sprengnetter { extSolr: '6.5.1', rmSolr: '3.8.3', solr: '6.6.3', dockerExtSolr: '6.5.1' }
/ruhmesmeile/projects/team/bonn/review/solr/sprengnetterat { extSolr: '6.5.1', rmSolr: '3.8.3', solr: '6.6.3', dockerExtSolr: '6.5.1' }
/ruhmesmeile/projects/team/bonn/review/solr/sprengnettercom { extSolr: '6.5.1', rmSolr: '3.8.3', solr: '6.6.3', dockerExtSolr: '6.5.1' }
/ruhmesmeile/projects/team/bonn/review/solr/tierschutzbund { extSolr: '6.5.1', rmSolr: 'none', solr: '6.6.3', dockerExtSolr: '6.5.1' }
/ruhmesmeile/projects/team/cologne
/ruhmesmeile/projects/team/cologne/review
/ruhmesmeile/projects/team/cologne/review/typo3
/ruhmesmeile/projects/team/cologne/review/typo3/sheepstreet
/ruhmesmeile/projects/team/cologne/review/typo3/tectrion
/ruhmesmeile/projects/team/cologne/review/typo3/bts
/ruhmesmeile/projects/team/cologne/review/typo3/hpp
/ruhmesmeile/projects/team/cologne/review/typo3/offlimits
/ruhmesmeile/projects/team/cologne/review/typo3/qtrado
/ruhmesmeile/projects/team/cologne/review/typo3/supraratiopac
/ruhmesmeile/projects/team/cologne/review/typo3/deloro
/ruhmesmeile/projects/team/cologne/review/typo3/lederer
/ruhmesmeile/projects/team/cologne/review/typo3/fiven
/ruhmesmeile/projects/team/cologne/review/typo3/noweda
/ruhmesmeile/projects/team/cologne/review/typo3/ifmb
/ruhmesmeile/projects/team/cologne/review/typo3/mettmann
/ruhmesmeile/projects/team/cologne/review/solr
/ruhmesmeile/projects/team/cologne/review/solr/sheepstreet { extSolr: '10.0.1', rmSolr: '5.0.7', solr: '8.2.0', dockerExtSolr: '10.0.1'  }
/ruhmesmeile/projects/team/cologne/review/solr/goatstreet { extSolr: '10.0.1', rmSolr: '5.0.7', solr: '8.2.0', dockerExtSolr: '10.0.1'  }
/ruhmesmeile/projects/team/cologne/review/solr/tectrion { extSolr: '7.5.3', rmSolr: '4.10.9', solr: '6.6.3', dockerExtSolr: '7.5.2'  }
/ruhmesmeile/projects/team/cologne/review/solr/deloro { extSolr: '7.5.3', rmSolr: '4.10.5', solr: '6.6.3', dockerExtSolr: '7.5.2' }
/ruhmesmeile/projects/team/cologne/review/solr/lederer { extSolr: '7.5.3', rmSolr: '4.10.5', solr: '6.6.3', dockerExtSolr: '7.5.2' }

etcdctl --no-sync mk /ruhmesmeile/projects/team/bonn/review/solr/fll '{"extSolr":"10.0.1","rmSolr":"4.10.8","solr":"8.2.0","dockerExtSolr":"10.0.1","host":"fll.typo3-review-solr.services.ruhmesmeile.local:8983"}'

* Alerts aufräumen (aktuelle Alerts die gerade feuern anpassen, alerten zu früh)
* Container updaten (Grafana(?), Prometheus, Alertmanager)
* Alert-Templates nützlicher / lesbarer gestalten (sowohl Sachet als auch Alertmanager -> Slack)
    * Differenzierung Team-Alerts (sollten gut lesbar sein), Infrastruktur-Alerts (sollten in der Breite alle notwendigen Informationen bieten, Lesbarkeit nicht zwingend entscheidend)   
* Zeitraum des Ausfalls in Resolve-Alert
* Maschine auf der Service / Container Alert sendet mit in Metadaten in Prometheus aufnehmen
* Alle Projekte die im Einsatz sind ergänzen
* Anleitung zum Hinzufügen / Ändern / Entfernen eines Projekts aus dieser Systematik
* Hinzufügen Keys Entwickler auf Maschinen, damit notwendige Schritte auch wirklich ausgeführt werden können
    * evtl. Bastion-Host über Vault / Hydra / Crowd möglich?
* Section in MomCorp Nimbus Bridge-Dashboard aufnehmen 
