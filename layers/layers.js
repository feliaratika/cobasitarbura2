ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12881208.337824, -1041057.669782, 13294248.172078, -879860.134360]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KAWASANHUTANPRODUKSI__1 = new ol.format.GeoJSON();
var features_KAWASANHUTANPRODUKSI__1 = format_KAWASANHUTANPRODUKSI__1.readFeatures(json_KAWASANHUTANPRODUKSI__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANHUTANPRODUKSI__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANPRODUKSI__1.addFeatures(features_KAWASANHUTANPRODUKSI__1);
var lyr_KAWASANHUTANPRODUKSI__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANHUTANPRODUKSI__1, 
                style: style_KAWASANHUTANPRODUKSI__1,
                popuplayertitle: 'KAWASAN HUTAN PRODUKSI_',
                interactive: true,
                title: '<img src="styles/legend/KAWASANHUTANPRODUKSI__1.png" /> KAWASAN HUTAN PRODUKSI_'
            });
var format_KAWASANPERIKANAN_2 = new ol.format.GeoJSON();
var features_KAWASANPERIKANAN_2 = format_KAWASANPERIKANAN_2.readFeatures(json_KAWASANPERIKANAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERIKANAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERIKANAN_2.addFeatures(features_KAWASANPERIKANAN_2);
var lyr_KAWASANPERIKANAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERIKANAN_2, 
                style: style_KAWASANPERIKANAN_2,
                popuplayertitle: 'KAWASAN PERIKANAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERIKANAN_2.png" /> KAWASAN PERIKANAN'
            });
var format_KAWASANPERMUKIMAN_3 = new ol.format.GeoJSON();
var features_KAWASANPERMUKIMAN_3 = format_KAWASANPERMUKIMAN_3.readFeatures(json_KAWASANPERMUKIMAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERMUKIMAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERMUKIMAN_3.addFeatures(features_KAWASANPERMUKIMAN_3);
var lyr_KAWASANPERMUKIMAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERMUKIMAN_3, 
                style: style_KAWASANPERMUKIMAN_3,
                popuplayertitle: 'KAWASAN PERMUKIMAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERMUKIMAN_3.png" /> KAWASAN PERMUKIMAN'
            });
var format_KAWASANKONSERVASI_4 = new ol.format.GeoJSON();
var features_KAWASANKONSERVASI_4 = format_KAWASANKONSERVASI_4.readFeatures(json_KAWASANKONSERVASI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKONSERVASI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKONSERVASI_4.addFeatures(features_KAWASANKONSERVASI_4);
var lyr_KAWASANKONSERVASI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKONSERVASI_4, 
                style: style_KAWASANKONSERVASI_4,
                popuplayertitle: 'KAWASAN KONSERVASI',
                interactive: true,
                title: '<img src="styles/legend/KAWASANKONSERVASI_4.png" /> KAWASAN KONSERVASI'
            });
var format_KAWASANPARIWISATA_5 = new ol.format.GeoJSON();
var features_KAWASANPARIWISATA_5 = format_KAWASANPARIWISATA_5.readFeatures(json_KAWASANPARIWISATA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPARIWISATA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPARIWISATA_5.addFeatures(features_KAWASANPARIWISATA_5);
var lyr_KAWASANPARIWISATA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPARIWISATA_5, 
                style: style_KAWASANPARIWISATA_5,
                popuplayertitle: 'KAWASAN PARIWISATA',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPARIWISATA_5.png" /> KAWASAN PARIWISATA'
            });
var format_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6 = new ol.format.GeoJSON();
var features_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6 = format_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.readFeatures(json_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.addFeatures(features_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6);
var lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6, 
                style: style_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6,
                popuplayertitle: 'KAWASAN YANG MEMBERIKAN PERLINDUNGAN TERHADAP KAWASAN BAWAHANNYA',
                interactive: true,
                title: '<img src="styles/legend/KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.png" /> KAWASAN YANG MEMBERIKAN PERLINDUNGAN TERHADAP KAWASAN BAWAHANNYA'
            });
var format_KAWASANPERTANIAN_7 = new ol.format.GeoJSON();
var features_KAWASANPERTANIAN_7 = format_KAWASANPERTANIAN_7.readFeatures(json_KAWASANPERTANIAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERTANIAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERTANIAN_7.addFeatures(features_KAWASANPERTANIAN_7);
var lyr_KAWASANPERTANIAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERTANIAN_7, 
                style: style_KAWASANPERTANIAN_7,
                popuplayertitle: 'KAWASAN PERTANIAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERTANIAN_7.png" /> KAWASAN PERTANIAN'
            });
var format_BADANAIR__8 = new ol.format.GeoJSON();
var features_BADANAIR__8 = format_BADANAIR__8.readFeatures(json_BADANAIR__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BADANAIR__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BADANAIR__8.addFeatures(features_BADANAIR__8);
var lyr_BADANAIR__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BADANAIR__8, 
                style: style_BADANAIR__8,
                popuplayertitle: 'BADAN AIR_',
                interactive: true,
                title: '<img src="styles/legend/BADANAIR__8.png" /> BADAN AIR_'
            });
var format_KAWASANEKOSISTEMMANGROVE__9 = new ol.format.GeoJSON();
var features_KAWASANEKOSISTEMMANGROVE__9 = format_KAWASANEKOSISTEMMANGROVE__9.readFeatures(json_KAWASANEKOSISTEMMANGROVE__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANEKOSISTEMMANGROVE__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANEKOSISTEMMANGROVE__9.addFeatures(features_KAWASANEKOSISTEMMANGROVE__9);
var lyr_KAWASANEKOSISTEMMANGROVE__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANEKOSISTEMMANGROVE__9, 
                style: style_KAWASANEKOSISTEMMANGROVE__9,
                popuplayertitle: 'KAWASAN EKOSISTEM MANGROVE_',
                interactive: true,
                title: '<img src="styles/legend/KAWASANEKOSISTEMMANGROVE__9.png" /> KAWASAN EKOSISTEM MANGROVE_'
            });
var format_KAWASANPERTAMBANGANDANENERGI_10 = new ol.format.GeoJSON();
var features_KAWASANPERTAMBANGANDANENERGI_10 = format_KAWASANPERTAMBANGANDANENERGI_10.readFeatures(json_KAWASANPERTAMBANGANDANENERGI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERTAMBANGANDANENERGI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERTAMBANGANDANENERGI_10.addFeatures(features_KAWASANPERTAMBANGANDANENERGI_10);
var lyr_KAWASANPERTAMBANGANDANENERGI_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERTAMBANGANDANENERGI_10, 
                style: style_KAWASANPERTAMBANGANDANENERGI_10,
                popuplayertitle: 'KAWASAN PERTAMBANGAN DAN ENERGI',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERTAMBANGANDANENERGI_10.png" /> KAWASAN PERTAMBANGAN DAN ENERGI'
            });
var format_KAWASANPERTAHANANDANKEAMANAN_11 = new ol.format.GeoJSON();
var features_KAWASANPERTAHANANDANKEAMANAN_11 = format_KAWASANPERTAHANANDANKEAMANAN_11.readFeatures(json_KAWASANPERTAHANANDANKEAMANAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERTAHANANDANKEAMANAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERTAHANANDANKEAMANAN_11.addFeatures(features_KAWASANPERTAHANANDANKEAMANAN_11);
var lyr_KAWASANPERTAHANANDANKEAMANAN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERTAHANANDANKEAMANAN_11, 
                style: style_KAWASANPERTAHANANDANKEAMANAN_11,
                popuplayertitle: 'KAWASAN PERTAHANAN DAN KEAMANAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERTAHANANDANKEAMANAN_11.png" /> KAWASAN PERTAHANAN DAN KEAMANAN'
            });
var format_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12 = new ol.format.GeoJSON();
var features_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12 = format_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.readFeatures(json_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.addFeatures(features_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12);
var lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12, 
                style: style_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12,
                popuplayertitle: 'KAWASAN HUTAN PRODUKSI:KAWASAN PERTAHANAN DAN KEAMANAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.png" /> KAWASAN HUTAN PRODUKSI:KAWASAN PERTAHANAN DAN KEAMANAN'
            });
var format_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13 = new ol.format.GeoJSON();
var features_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13 = format_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.readFeatures(json_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.addFeatures(features_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13);
var lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13, 
                style: style_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13,
                popuplayertitle: 'KAWASAN HUTAN PRODUKSI:KAWASAN PERMUKIMAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.png" /> KAWASAN HUTAN PRODUKSI:KAWASAN PERMUKIMAN'
            });
var format_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14 = new ol.format.GeoJSON();
var features_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14 = format_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.readFeatures(json_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.addFeatures(features_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14);
var lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14, 
                style: style_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14,
                popuplayertitle: 'KAWASAN HUTAN PRODUKSI:KAWASAN PERUNTUKAN INDUSTRI',
                interactive: true,
                title: '<img src="styles/legend/KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.png" /> KAWASAN HUTAN PRODUKSI:KAWASAN PERUNTUKAN INDUSTRI'
            });
var format_KAWASANPERGARAMAN_15 = new ol.format.GeoJSON();
var features_KAWASANPERGARAMAN_15 = format_KAWASANPERGARAMAN_15.readFeatures(json_KAWASANPERGARAMAN_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERGARAMAN_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERGARAMAN_15.addFeatures(features_KAWASANPERGARAMAN_15);
var lyr_KAWASANPERGARAMAN_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERGARAMAN_15, 
                style: style_KAWASANPERGARAMAN_15,
                popuplayertitle: 'KAWASAN PERGARAMAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERGARAMAN_15.png" /> KAWASAN PERGARAMAN'
            });
var format_KAWASANPERUNTUKANINDUSTRI_16 = new ol.format.GeoJSON();
var features_KAWASANPERUNTUKANINDUSTRI_16 = format_KAWASANPERUNTUKANINDUSTRI_16.readFeatures(json_KAWASANPERUNTUKANINDUSTRI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPERUNTUKANINDUSTRI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPERUNTUKANINDUSTRI_16.addFeatures(features_KAWASANPERUNTUKANINDUSTRI_16);
var lyr_KAWASANPERUNTUKANINDUSTRI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPERUNTUKANINDUSTRI_16, 
                style: style_KAWASANPERUNTUKANINDUSTRI_16,
                popuplayertitle: 'KAWASAN PERUNTUKAN INDUSTRI',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPERUNTUKANINDUSTRI_16.png" /> KAWASAN PERUNTUKAN INDUSTRI'
            });
var format_KAWASANKONSERVASIKAWASANPERMUKIMAN_17 = new ol.format.GeoJSON();
var features_KAWASANKONSERVASIKAWASANPERMUKIMAN_17 = format_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.readFeatures(json_KAWASANKONSERVASIKAWASANPERMUKIMAN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKONSERVASIKAWASANPERMUKIMAN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.addFeatures(features_KAWASANKONSERVASIKAWASANPERMUKIMAN_17);
var lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKONSERVASIKAWASANPERMUKIMAN_17, 
                style: style_KAWASANKONSERVASIKAWASANPERMUKIMAN_17,
                popuplayertitle: 'KAWASAN KONSERVASI:KAWASAN PERMUKIMAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANKONSERVASIKAWASANPERMUKIMAN_17.png" /> KAWASAN KONSERVASI:KAWASAN PERMUKIMAN'
            });
var format_KAWASANKONSERVASIKAWASANPARIWISATA_18 = new ol.format.GeoJSON();
var features_KAWASANKONSERVASIKAWASANPARIWISATA_18 = format_KAWASANKONSERVASIKAWASANPARIWISATA_18.readFeatures(json_KAWASANKONSERVASIKAWASANPARIWISATA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKONSERVASIKAWASANPARIWISATA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKONSERVASIKAWASANPARIWISATA_18.addFeatures(features_KAWASANKONSERVASIKAWASANPARIWISATA_18);
var lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKONSERVASIKAWASANPARIWISATA_18, 
                style: style_KAWASANKONSERVASIKAWASANPARIWISATA_18,
                popuplayertitle: 'KAWASAN KONSERVASI:KAWASAN PARIWISATA',
                interactive: true,
                title: '<img src="styles/legend/KAWASANKONSERVASIKAWASANPARIWISATA_18.png" /> KAWASAN KONSERVASI:KAWASAN PARIWISATA'
            });
var format_KAWASANKONSERVASIKAWASANPERTANIAN_19 = new ol.format.GeoJSON();
var features_KAWASANKONSERVASIKAWASANPERTANIAN_19 = format_KAWASANKONSERVASIKAWASANPERTANIAN_19.readFeatures(json_KAWASANKONSERVASIKAWASANPERTANIAN_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANKONSERVASIKAWASANPERTANIAN_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANKONSERVASIKAWASANPERTANIAN_19.addFeatures(features_KAWASANKONSERVASIKAWASANPERTANIAN_19);
var lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANKONSERVASIKAWASANPERTANIAN_19, 
                style: style_KAWASANKONSERVASIKAWASANPERTANIAN_19,
                popuplayertitle: 'KAWASAN KONSERVASI:KAWASAN PERTANIAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANKONSERVASIKAWASANPERTANIAN_19.png" /> KAWASAN KONSERVASI:KAWASAN PERTANIAN'
            });
var format_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20 = new ol.format.GeoJSON();
var features_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20 = format_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.readFeatures(json_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.addFeatures(features_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20);
var lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20, 
                style: style_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20,
                popuplayertitle: 'KAWASAN PEMBUANGAN HASIL PENGERUKAN DI LAUT',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.png" /> KAWASAN PEMBUANGAN HASIL PENGERUKAN DI LAUT'
            });
var format_KAWASANPENCADANGANKONSERVASIDILAUT_21 = new ol.format.GeoJSON();
var features_KAWASANPENCADANGANKONSERVASIDILAUT_21 = format_KAWASANPENCADANGANKONSERVASIDILAUT_21.readFeatures(json_KAWASANPENCADANGANKONSERVASIDILAUT_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANPENCADANGANKONSERVASIDILAUT_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANPENCADANGANKONSERVASIDILAUT_21.addFeatures(features_KAWASANPENCADANGANKONSERVASIDILAUT_21);
var lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANPENCADANGANKONSERVASIDILAUT_21, 
                style: style_KAWASANPENCADANGANKONSERVASIDILAUT_21,
                popuplayertitle: 'KAWASAN PENCADANGAN KONSERVASI DI LAUT',
                interactive: true,
                title: '<img src="styles/legend/KAWASANPENCADANGANKONSERVASIDILAUT_21.png" /> KAWASAN PENCADANGAN KONSERVASI DI LAUT'
            });
var format_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22 = new ol.format.GeoJSON();
var features_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22 = format_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.readFeatures(json_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.addFeatures(features_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22);
var lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22, 
                style: style_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22,
                popuplayertitle: 'KWS YANG MEMBERIKAN PERLINDUNGAN THD KWS BAWAHANNYA:KWS PERUNTUKAN INDUSTRI',
                interactive: true,
                title: '<img src="styles/legend/KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.png" /> KWS YANG MEMBERIKAN PERLINDUNGAN THD KWS BAWAHANNYA:KWS PERUNTUKAN INDUSTRI'
            });
var format_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23 = new ol.format.GeoJSON();
var features_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23 = format_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.readFeatures(json_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.addFeatures(features_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23);
var lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23, 
                style: style_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23,
                popuplayertitle: 'KAWASAN YANG MEMBERIKAN PERLINDUNGAN THD KWS BAWAHANNYA:KWS PERTANIAN',
                interactive: true,
                title: '<img src="styles/legend/KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.png" /> KAWASAN YANG MEMBERIKAN PERLINDUNGAN THD KWS BAWAHANNYA:KWS PERTANIAN'
            });
var format_KAWASANTRANSPORTASI_24 = new ol.format.GeoJSON();
var features_KAWASANTRANSPORTASI_24 = format_KAWASANTRANSPORTASI_24.readFeatures(json_KAWASANTRANSPORTASI_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANTRANSPORTASI_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANTRANSPORTASI_24.addFeatures(features_KAWASANTRANSPORTASI_24);
var lyr_KAWASANTRANSPORTASI_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAWASANTRANSPORTASI_24, 
                style: style_KAWASANTRANSPORTASI_24,
                popuplayertitle: 'KAWASAN TRANSPORTASI',
                interactive: true,
                title: '<img src="styles/legend/KAWASANTRANSPORTASI_24.png" /> KAWASAN TRANSPORTASI'
            });
var format_BATASADMINISTRASIWILAYAH_25 = new ol.format.GeoJSON();
var features_BATASADMINISTRASIWILAYAH_25 = format_BATASADMINISTRASIWILAYAH_25.readFeatures(json_BATASADMINISTRASIWILAYAH_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASADMINISTRASIWILAYAH_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASIWILAYAH_25.addFeatures(features_BATASADMINISTRASIWILAYAH_25);
var lyr_BATASADMINISTRASIWILAYAH_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASADMINISTRASIWILAYAH_25, 
                style: style_BATASADMINISTRASIWILAYAH_25,
                popuplayertitle: 'BATAS ADMINISTRASI WILAYAH',
                interactive: true,
    title: 'BATAS ADMINISTRASI WILAYAH<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_0.png" /> Kabupaten Bima<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_1.png" /> Kabupaten Dompu<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_2.png" /> Kabupaten Lombok Barat<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_3.png" /> Kabupaten Lombok Tengah<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_4.png" /> Kabupaten Lombok Timur<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_5.png" /> Kabupaten Lombok Utara<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_6.png" /> Kabupaten Sumbawa<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_7.png" /> Kabupaten Sumbawa Barat<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_8.png" /> Kota Bima<br />\
    <img src="styles/legend/BATASADMINISTRASIWILAYAH_25_9.png" /> Kota Mataram<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KAWASANHUTANPRODUKSI__1.setVisible(true);lyr_KAWASANPERIKANAN_2.setVisible(true);lyr_KAWASANPERMUKIMAN_3.setVisible(true);lyr_KAWASANKONSERVASI_4.setVisible(true);lyr_KAWASANPARIWISATA_5.setVisible(true);lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.setVisible(true);lyr_KAWASANPERTANIAN_7.setVisible(true);lyr_BADANAIR__8.setVisible(true);lyr_KAWASANEKOSISTEMMANGROVE__9.setVisible(true);lyr_KAWASANPERTAMBANGANDANENERGI_10.setVisible(true);lyr_KAWASANPERTAHANANDANKEAMANAN_11.setVisible(true);lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.setVisible(true);lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.setVisible(true);lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.setVisible(true);lyr_KAWASANPERGARAMAN_15.setVisible(true);lyr_KAWASANPERUNTUKANINDUSTRI_16.setVisible(true);lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.setVisible(true);lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18.setVisible(true);lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19.setVisible(true);lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.setVisible(true);lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21.setVisible(true);lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.setVisible(true);lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.setVisible(true);lyr_KAWASANTRANSPORTASI_24.setVisible(true);lyr_BATASADMINISTRASIWILAYAH_25.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KAWASANHUTANPRODUKSI__1,lyr_KAWASANPERIKANAN_2,lyr_KAWASANPERMUKIMAN_3,lyr_KAWASANKONSERVASI_4,lyr_KAWASANPARIWISATA_5,lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6,lyr_KAWASANPERTANIAN_7,lyr_BADANAIR__8,lyr_KAWASANEKOSISTEMMANGROVE__9,lyr_KAWASANPERTAMBANGANDANENERGI_10,lyr_KAWASANPERTAHANANDANKEAMANAN_11,lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12,lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13,lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14,lyr_KAWASANPERGARAMAN_15,lyr_KAWASANPERUNTUKANINDUSTRI_16,lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17,lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18,lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19,lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20,lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21,lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22,lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23,lyr_KAWASANTRANSPORTASI_24,lyr_BATASADMINISTRASIWILAYAH_25];
lyr_KAWASANHUTANPRODUKSI__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERIKANAN_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERMUKIMAN_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANKONSERVASI_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPARIWISATA_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERTANIAN_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_BADANAIR__8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANEKOSISTEMMANGROVE__9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERTAMBANGANDANENERGI_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERTAHANANDANKEAMANAN_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERGARAMAN_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPERUNTUKANINDUSTRI_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_KAWASANTRANSPORTASI_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', });
lyr_BATASADMINISTRASIWILAYAH_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KABUPATEN_': 'KABUPATEN_', });
lyr_KAWASANHUTANPRODUKSI__1.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERIKANAN_2.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERMUKIMAN_3.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANKONSERVASI_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPARIWISATA_5.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERTANIAN_7.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_BADANAIR__8.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANEKOSISTEMMANGROVE__9.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERTAMBANGANDANENERGI_10.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERTAHANANDANKEAMANAN_11.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERGARAMAN_15.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPERUNTUKANINDUSTRI_16.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_KAWASANTRANSPORTASI_24.set('fieldImages', {'OBJECTID': 'Hidden', 'NAMOBJ': 'TextEdit', });
lyr_BATASADMINISTRASIWILAYAH_25.set('fieldImages', {'OBJECTID': 'Hidden', 'KABUPATEN_': 'TextEdit', });
lyr_KAWASANHUTANPRODUKSI__1.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERIKANAN_2.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERMUKIMAN_3.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANKONSERVASI_4.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPARIWISATA_5.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTERHADAPKAWASANBAWAHANNYA_6.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERTANIAN_7.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_BADANAIR__8.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANEKOSISTEMMANGROVE__9.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERTAMBANGANDANENERGI_10.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERTAHANANDANKEAMANAN_11.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERTAHANANDANKEAMANAN_12.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERMUKIMAN_13.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANHUTANPRODUKSIKAWASANPERUNTUKANINDUSTRI_14.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERGARAMAN_15.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPERUNTUKANINDUSTRI_16.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANKONSERVASIKAWASANPERMUKIMAN_17.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANKONSERVASIKAWASANPARIWISATA_18.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANKONSERVASIKAWASANPERTANIAN_19.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPEMBUANGANHASILPENGERUKANDILAUT_20.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANPENCADANGANKONSERVASIDILAUT_21.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KWSYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERUNTUKANINDUSTRI_22.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANYANGMEMBERIKANPERLINDUNGANTHDKWSBAWAHANNYAKWSPERTANIAN_23.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_KAWASANTRANSPORTASI_24.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_BATASADMINISTRASIWILAYAH_25.set('fieldLabels', {'KABUPATEN_': 'no label', });
lyr_BATASADMINISTRASIWILAYAH_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});