import { editorLocalization } from "../editorLocalization";

export var turkishStrings = {
  //survey templates
  survey: {
    edit: "Düzenle",
    externalHelpLink: "Nasıl anket oluşturulur izle",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Lütfen araç kutusundan bir soru sürükleyin.",
    addLogicItem: "Anket akışını özelleştirmek için bir kural oluşturun.",
    copy: "Kopyala",
    addToToolbox: "Araç kutusuna ekle",
    deletePanel: "Paneli Sil",
    deleteQuestion: "Soruyu Sil",
    convertTo: "Çevir",
    drag: "Nesne sürükleyin",
  },
  //questionTypes
  qt: {
    default: "Varsayılan",
    checkbox: "Onay Kutusu",
    comment: "Yorum",
    imagepicker: "Resim seçici",
    image: "Resim",
    dropdown: "Seçim Kıutusu",
    file: "Dosya",
    html: "Html",
    matrix: "Matrix (tek seçim)",
    matrixdropdown: "Matrix (çoklu seçim)",
    matrixdynamic: "Matrix (dinamik satır)",
    multipletext: "Çoklu Yazı",
    panel: "Panel",
    paneldynamic: "Panel (dinamik panel)",
    radiogroup: "Seçim Grubu",
    rating: "Değerlendirme",
    text: "Tek Girdi",
    boolean: "Mantıksal İfade",
    expression: "İfade (düzenlenemez)",
    signaturepad: "İmza Defteri",
    flowpanel: "Akış Paneli",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Varyayılan ({0})",
    survey: "Anket",
    settings: "Anket Ayarları",
    settingsTooltip: "Anket ayarlarını aç",
    //opjectPropertiesHeader: "Gelişmiş",
    //showObjectProperties: "Nesne Özelliklerini Göster",
    //hideObjectProperties: "Nesne Özelliklerini Gizle",
    showPanel: "Paneli Göster",
    hidePanel: "Paneli Gizle",
    //editSurvey: "Anketi Düzenle",
    addNewPage: "Yeni Sayfa Ekle",
    moveRight: "Sağa sürükle",
    moveLeft: "Sola sürükle",
    deletePage: "Sayfayı Sil",
    editPage: "Sayfayı Düzenle",
    edit: "Düzenle",
    newPageName: "Sayfa",
    newQuestionName: "Soru",
    newPanelName: "Panel",
    newTextItemName: "Yazı",
    testSurvey: "Anketi Test Et",
    testSurveyAgain: "Anketi Tekrar Test Et",
    testSurveyWidth: "Anket genişliği: ",
    navigateToMsg: "Şuraya git:",
    logic: "Mantıksal Anket",
    embedSurvey: "Göülü Anket",
    translation: "Çeviri",
    saveSurvey: "Anketi Kaydet",
    saveSurveyTooltip: "Anketi Kaydet",
    designer: "Anket Tasarımı",
    jsonEditor: "JSON Editor",
    undo: "Geri",
    redo: "İleri",
    undoTooltip: "Son değişikliği geri al",
    redoTooltip: "Son değişikliği ileri al",
    options: "Seçenekler",
    generateValidJSON: "JSON Oluştur",
    generateReadableJSON: "Okunabilir JSON oluştur",
    toolbox: "Araç Kutusu",
    "property-grid": "Özellikler",
    toolboxGeneralCategory: "Genel",
    //delSelObject: "Seçili nesneyi sil",
    //editSelObject: "Seçili nesneyi düzenle",
    correctJSON: "JSON nesnesini doğrular.",
    surveyResults: "Anket Sonucu: ",
    surveyResultsTable: "Tablo olarak",
    surveyResultsJson: "JSON olarak",
    resultsTitle: "Soru başlığı",
    resultsName: "Soru adı",
    resultsValue: "Cevap değeri",
    resultsDisplayValue: "Görünen değer",
    modified: "Düzenlendi",
    saving: "Kaydediliyor",
    saved: "Kaydedildi",
    saveError: "Hata! Editor içerisi kaydedilmedi.",
    translationAddLanguage: "Çeviri için dil seçiniz",
    translationShowAllStrings: "Tüm yazıları göster",
    translationShowAllPages: "Tüm sayfaları göster",
    translationNoStrings: "Çevrilecek yazı yok. Lütfen, filtreyi değiştirin.",
    translationExportToSCVButton: "CSV dışa çıkart",
    translationImportFromSCVButton: "CSV içe aktar",
    translationMergeLocaleWithDefault: "{0} varsayılan çeviri ile sıkıştır",
    bold: "Kalın",
    italic: "Italik",
    underline: "Alt Çizgi",
    fpAddQuestion: "Soru Ekle...",
    //completedHtmlOnConditionItemText: "Göster Eğer:",
    lg: {
      //Logic tab strings
      page_visibilityName: "Sayfa görünürse",
      panel_visibilityName: "Panel görünürse",
      panel_enableName: "Panel aktif/pasif ise",
      question_visibilityName: "Soru görüürse",
      question_enableName: "Soru aktif/pasifse",
      question_requireName: "Soru isteğe bağlı zorunluysa",
      trigger_completeName: "Anketi tamamla",
      trigger_setvalueName: "Soru değerini güncelle",
      trigger_copyvalueName: "Soru değerini kopyala",
      trigger_skipName: "Soruyu atla",
      trigger_runExpressionName: "Varsayılan ifadeyi çalıştır",
      completedHtmlOnConditionName: "Varyalın 'Teşekkür sayfası' yazısı",

      page_visibilityDescription:
        "Mantıksal sorgu geçerli olduğu zaman sayfayı görünür yap. Aksi takdirde gizle.",
      panel_visibilityDescription:
        "Mantıksal sorgu geçerli olduğu zaman paneli görünür yap. Aksi takdirde gizle.",
      panel_enableDescription:
        "Panel oluştur ve tüm nesneleri panelin içine al. Mantıksal sorgu geçerli olduğunda paneli aktif et. Aksi takdirde tümünü pasifleştir.",
      question_visibilityDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu görünür yap. Aksi takdirde gizle.",
      question_enableDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu aktif yap. Aksi takdirde pasifleştir.",
      question_requireDescription:
        "Mantıksal sorgu geçerli olduğunda soruyu zorunlu olarak düzenle.",
      trigger_completeDescription:
        "Mantıksal sorgu geçerli olduğunda anketi tamamla ve son kullanıya 'Teşekkür sayfası'nı göster.",
      trigger_setvalueDescription:
        "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, değer seçilen soruya ayarlansın.",
      trigger_copyvalueDescription:
        "Mantık ifadesinde kullanılan soru değerleri değiştirildiğinde ve mantık ifadesi true değerini döndürdüğünde, seçilen bir sorunun değeri seçilen başka bir soruya kopyalansın.",
      trigger_skipDescription:
        "Mantıksal ifade geçerli olduğunda anket seçilen soruya atlasın / odaklansın.",
      trigger_runExpressionDescription:
        "Mantksal ifade geçerli olduğunda ve özel ifade gereçli olur. İsteğe bağlı olarak bu ifade sonucunu seçilen soruya ayarlayabilirsiniz.",
      completedHtmlOnConditionDescription:
        "Eğer mantıksa ifade geçerli olursa, varsayılan ''Teşekkürler sayfası' yazısı girilen ile dğeiştirilsin.",

      itemExpressionText: "Mantıksal ifade: '{0}' geçerli olsun:", //{0} - the expression
      page_visibilityText: "{0} sayfayı görünür yap", //{0} page name
      panel_visibilityText: "{0} paneli görünür yap", //{0} panel name
      panel_enableText: "{0} panel aktif olur", //{0} panel name
      question_visibilityText: "{0} soruyu görünür yap", //{0} question name
      question_enableText: "{0} soruyu aktif yap", //{0} question name
      question_requireText: "{0} cevabı zorunlu yap", //{0} question name
      trigger_completeText: "Anket tamamlandı",
      trigger_setvalueText: "Sorunun içine: {0} değer {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Sorusundan {1}, {0} değerini, soruya kopyala", //{0} and {1} question names
      trigger_skipText: "Soruya geç {0}", //{0} question name
      trigger_runExpressionText1: "Mantıksal ifadeyi çalıştır: '{0}'", //{0} the expression
      trigger_runExpressionText2: " ve sonuç değerini soruya ekle: {0}", //{0} question name
      completedHtmlOnConditionText: "Özel 'Teşekkürler sayfasını' göster.",

      conditions: "Koşul(lar)",
      actions: "Olay(lar)",
      expressionEditorTitle: "Koşul(ları) tanımla",
      actionsEditorTitle: "Olay(ları) tanımla",

      deleteAction: "Olayı Sil",
      addNewAction: "Yeni olay ekle",
      selectedActionCaption: "Eklemek için bir olay seçin...",

      expressionInvalid:
        "Mantıksal ifade boş veya geçersiz. Lütfen düzenleyin.",
      noActionError: "Lütfen, En az bir olay seçiniz.",
      actionInvalid: "Lütfen, Olay(lar)daki sorunları gideriniz.",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "Uygula",
    ok: "TAMAM",
    save: "Kaydet",
    cancel: "İptal",
    reset: "Sıfırla",
    refresh: "Yenile",
    // close: "Close",
    delete: "Sil",
    add: "Ekle",
    addNew: "Yeni Ekle",
    addItem: "Yeni nesne ekleme için tıklayınız...",
    addOther: "Diğer",
    addSelectAll: "Tümünü Seç",
    addNone: "Hiçbiri",
    removeAll: "Tümünü Sil",
    edit: "Düzenle",
    back: "Kaydetmeden çık",
    saveAndBack: "Kaydet ve çık",
    // itemValueEdit: "Visible If",
    editChoices: "Seçenekleri düzenle",
    showChoices: "Seçenekleri göster",
    move: "Hareket",
    empty: "<boş>",
    // notEmpty: "<edit value>",
    fastEntry: "Hızlı Giriş",
    formEntry: "Form Girişi",
    testService: "Servisi test et",
    itemSelectorEmpty: "Lütfen nesneyi seçiniz",
    conditionActionEmpty: "Lütfen olayı seçiniz",
    conditionSelectQuestion: "Soruyu seç...",
    conditionSelectPage: "Sayfayı seç...",
    conditionSelectPanel: "Paneli seç...",
    conditionValueQuestionTitle: "Lütfen değer/seçenek giriniz",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Lütfen mantıksal ifade giriniz. Soru değerlerine erişmek için süslü parantez kullanabilirsiniz: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Mantıksal ifade kopyası için ctrl+space tuşlarına basınız",
    aceEditorRowTitle: "Geçerli satır",
    aceEditorPanelTitle: "Geçerli panel",
    showMore: "Daha fazla bilgi için dokümantasyonu inceleyiniz",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Erişilebilir sorular:",
    cellsEmptyRowsColumns: "En az bir kolon veya satır olmalı",

    propertyIsEmpty: "Lütfen değer giriniz",
    propertyNameIsNotUnique: "Lütfen benzersiz bir isim giriniz",
    listIsEmpty: "Yeni eleman ekle",
    expressionIsEmpty: "Mantıksal ifade boş",
    value: "Değer",
    text: "Yazı",
    rowid: "Satır ID",
    imageLink: "Resim linki",
    columnEdit: "Kolonu düzenle: {0}",
    itemEdit: "Eleman düzenle: {0}",

    url: "URL",
    path: "Yol",
    valueName: "Değer adı",
    titleName: "Başlık adı",
    titlePlaceholder: "Başlık",
    surveyTitlePlaceholder: "Anket başlığı",
    pageTitlePlaceholder: "Sayfa başlığı",
    descriptionPlaceholder: "Bir açıklama giriniz",
    surveyDescriptionPlaceholder: "Anket açıklaması giriniz",
    pageDescriptionPlaceholder: "Sayfa açıklaması giriniz",

    hasOther: "Başka bir öğeye sahip",
    otherText: "Diğer eleman metni",
    hasNone: "Hiçbir elemana sahip değil",
    noneText: "Hiçbir eleman metni",
    hasSelectAll: "Tüm elemanlar seçildi",
    selectAllText: "Tüm elemanların yazısını seç",
    choicesMin: "Otomatik oluşturulan öğeler için minimum değer",
    choicesMax: "Otomatik oluşturulan öğeler için maksimum değer",
    choicesStep: "Otomatik oluşturulan öğeler arasındaki fark",
    name: "isim",
    title: "Başlık",
    cellType: "Hücre tipi",
    colCount: "Kolon sayısı",
    choicesOrder: "Seçenek sırasını seç",
    visible: "Görünür?",
    isRequired: "Zorunlu?",
    isAllRowRequired: "Tüm satırlar zorunlu",
    requiredErrorText: "Zorunlu hata yazısı",
    startWithNewLine: "Yeni satırla başla?",
    rows: "Satır sayısı",
    cols: "Kolon sayısı",
    placeHolder: "Giriş varsayılan içeriği",
    showPreview: "Resim önizleme gösteriliyor mu??",
    storeDataAsText: "Dosya içeriğini JSON sonucunda metin olarak depola",
    maxSize: "Bayt cinsinden maksimum dosya boyutu",
    imageHeight: "Resim yüksekliği",
    imageWidth: "Resim genişliği",
    rowCount: "Satır sayısı",
    columnLayout: "Kolon yerleşimi",
    addRowLocation: "Satır butonu konumu ekle",
    addRowText: "Satır butonu yazısı ekle",
    removeRowText: "Satır butonu yazısını kaldır",
    rateMin: "Minimum oran",
    rateMax: "Maksimum oran",
    rateStep: "Oylama adımı",
    minRateDescription: "Minimum oran açıklaması",
    maxRateDescription: "Maksimum oran açıklaması",
    inputType: "Girdi tipi",
    optionsCaption: "Seçenekler başlığı",
    defaultValue: "Varsayılan değer",
    cellsDefaultRow: "Varsayılan hücre yazısı",

    surveyEditorTitle: "Anket ayarlarını düzenle",
    qEditorTitle: "Düzenle: {0}",

    maxLength: "Maksimum uzunluk",

    buildExpression: "Kur",
    editExpression: "Düzenle",
    and: "Ve",
    or: "Veya",
    remove: "Kaldır",
    addCondition: "Koşul ekle",

    //survey
    showTitle: "Başlığı göster/gizle",
    locale: "Varsayılan dil",
    simulator: "Cihaz seçin",
    landscapeOrientation: "Yatay",
    mode: "Mod (düzenlebilir/düzenlenemez)",
    clearInvisibleValues: "Görünmez değerleri sil",
    cookieName:
      "Çerez adı (anketi yerel olarak iki kez devre dışı bırakmak için)",
    sendResultOnPageNext: "Bir sonraki sayfada anket sonuçlarını gönder",
    storeOthersAsComment: "'Diğerleri' değerini ayrı alanda depolayın",
    showPageTitles: "Sayfa başlıklarını göster",
    showPageNumbers: "Sayfa numaralarını göster",
    pagePrevText: "Önceki sayfa butonu metni",
    pageNextText: "Yeni sayfa butonu metni",
    completeText: "Tamamla butonu metni",
    startSurveyText: "Başla butonu yazısı",
    showNavigationButtons: "Gezinme butonlarını göster (varsayılan gezinme)",
    showPrevButton: "Önceki butonu göster (kullanıcı önceki sayfaya dönebilir)",
    firstPageIsStarted: "Anketteki ilk sayfa bir başlangıç sayfasıdır.",
    showCompletedPage: "Tamamlanan sayfayı en sonunda göster (HTML)",
    goNextPageAutomatic:
      "Tüm soruları cevaplarken otomatik olarak sonraki sayfaya git",
    showProgressBar: "İlerleme çubuğunu göster",
    questionTitleLocation: "Soru başlığı konumu",
    requiredText: "Zorunlu soru sembolü",
    questionStartIndex: "Soru indeksi (1, 2 veya 'A', 'a' gibi)",
    showQuestionNumbers: "Soru numarasını göster",
    questionTitleTemplate:
      "Soru başlığı şablonu, varsayılan değer: '{no}. {require} {title}'",
    questionErrorLocation: "Soru hatası konumu",
    focusFirstQuestionAutomatic: "İlk soruyu sayfayı değiştirmeye odakla",
    questionsOrder: "Sayfadaki öğelerin sırası",
    maxTimeToFinish: "Anketi bitirmek için maksimum süre",
    maxTimeToFinishPage: "Ankette bir sayfayı bitirmek için maksimum süre",
    showTimerPanel: "Zamanlayıcı panelini göster",
    showTimerPanelMode: "Zamanlayıcı paneli modunu göster",
    renderMode: "İşleme modu",
    allowAddPanel: "Panel eklemeye izin ver",
    allowRemovePanel: "Panel silmeye izin ver",
    panelAddText: "Panel ekleme metni",
    panelRemoveText: "Panel silme metni",
    isSinglePage: "Tüm öğeleri tek bir sayfada göster",
    html: "Html",
    expression: "Mantıksal İfade",

    minValue: "Minimum değer",
    maxValue: "Maksimum değer",
    minLength: "Minimum uzunluk",
    allowDigits: "Rakamlara izin ver",
    minCount: "Minimum miktar",
    maxCount: "Maksimum miktar",
    regex: "Düzenli ifade",

    totalText: "Toplam metni",
    totalType: "Toplam tipi",
    totalExpression: "Toplam mantıksal ifade",
    totalDisplayStyle: "Toplam görünüm",
    totalCurrency: "Toplam para birimi",
    totalFormat: "Toplam format",

    // Header  adorner
    logoPosition: "Logo posizyonu",
    addLogo: "Logo ekle...",
    changeLogo: "Logoyu değiştir...",
    logoPositions: {
      none: "Logoyu kaldır",
      left: "Sol",
      right: "Sağ",
      top: "Üstte",
      bottom: "Altta",
    },

    tabs: {
      general: "Genel",
      fileOptions: "Seçenekler",
      html: "Html Editor",
      columns: "Kolonlar",
      rows: "Satırlar",
      choices: "Seçenekler",
      items: "Elemanlar",
      visibleIf: "Göster eğer",
      enableIf: "Pasifleştir Eğer",
      requiredIf: "Zorunlu Eğer",
      rateValues: "Oran değerleri",
      choicesByUrl: "Webten seçenekler",
      matrixChoices: "Varsayılan seçenekler",
      multipleTextItems: "Yazı girdileri",
      numbering: "Rakamlama",
      validators: "Doğrulayıcılar",
      navigation: "Gezinme",
      question: "Soru",
      completedHtml: "Tamamlanmış HTML",
      completedHtmlOnCondition: "Koşulda HTML tamamlandı",
      loadingHtml: "Bekleme HTMLi",
      timer: "Zamanlayıcı / Sınav",
      calculatedValues: "Hesaplanan Değerler",
      triggers: "Tetikleyiciler",
      templateTitle: "Şablon başlığı",
      totals: "Toplamlar",
      logic: "Mantık",
      layout: "Şablon",
      data: "Veri",
      validation: "Doğrulayıcı",
      cells: "Hücreler",
      showOnCompleted: "Tamamlandı Göster",
      logo: "Anket Başlığında Logo",
      others: "Diğer",
    },
    editProperty: "Özelliği düzenle '{0}'",
    items: "[ Elemanlar: {0} ]",

    enterNewValue: "Lütfen, değer girin.",
    noquestions: "Ankette herhangi bir soru yok.",
    createtrigger: "Lütfen bir tetikleyici oluşturun",
    keyboardAdornerTip:
      "Öğeyi düzenlemek için enter butonuna basın, öğeyi silmek için sil butonuna basın, öğeyi taşımak için kontrol artı ok yukarı veya ok tuşuna basın",
    triggerOn: "Açık ",
    triggerMakePagesVisible: "Sayfaları görünür yap:",
    triggerMakeQuestionsVisible: "Elemanları görünür yap:",
    triggerCompleteText: "Başarılı olursa anketi tamamlayın.",
    triggerNotSet: "Tetikleyici ayarlanmadı",
    triggerRunIf: "Çalıştır eğer",
    triggerSetToName: "Değerini şuradan değiştir: ",
    triggerFromName: "Değerini şuradan kopyala: ",
    triggerRunExpression: "Mantıksal ifadeyi çalıştır:",
    triggerSetValue: "şuraya: ",
    triggerGotoName: "Soruya git:",
    triggerIsVariable: "Değişkeni anket sonucuna koymayın.",
    triggerRunExpressionEmpty: "Lütfen geçerli bir ifade girin",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
  },
  //Operators
  op: {
    empty: "boş",
    notempty: "boş değil",
    equal: "eşittir",
    notequal: "eşit değildir",
    contains: "içerir",
    notcontains: "içermez",
    anyof: "herhangi biri",
    allof: "tümü",
    greater: "büyüktür",
    less: "küçüktür",
    greaterorequal: "büyük eşittir",
    lessorequal: "küçük eşittir",
  },
  //Embed window
  ew: {
    angular: "Angular versiyonu kullan",
    jquery: "Jquery versiyonu kullan",
    knockout: "Knockout versiyonu kullan",
    react: "React versiyonu kullan",
    vue: "Vue versiyonu kullan",
    bootstrap: "Bootstrap",
    standard: "Bootstrapsız",
    showOnPage: "Bir sayfada anket göster",
    showInWindow: "Anketi bir pencerede göster",
    loadFromServer: "Anket JSON'u sunucudan yükle",
    titleScript: "Scriptler ve stiller",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Test edilecek sayfayı seçin:",
    showInvisibleElements: "Görünmez öğeleri göster",
  },
  validators: {
    answercountvalidator: "cevap sayısı",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "anketi tamamla",
    setvaluetrigger: "değeri ayarla",
    copyvaluetrigger: "değeri kopyala",
    skiptrigger: "soruyu atla",
    runexpressiontrigger: "mantıksal ifadeyi çalıştır",
    visibletrigger: "görünürlüğü değiştir (kullanımdan kaldırıldı)",
  },
  //Properties
  p: {
    name: "adı",
    title: {
      name: "başlık",
      title: "'Ad' ile aynıysa boş bırakın",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};

editorLocalization.locales["tr"] = turkishStrings;