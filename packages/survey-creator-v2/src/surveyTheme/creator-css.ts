export var creatorCss = {
  root: "svc-survey-root-modern",
  container: "svc-survey-container-modern",
  header: "svc-survey-title svc-survey-container-modern__title",
  body: "svc-survey-body",
  bodyEmpty: "svc-survey-body svc-survey-body--empty",
  footer: "svc-survey-footer svc-survey-body__footer svc-survey-clearfix",
  title: "",
  description: "",
  logo: "svc-survey-logo",
  logoImage: "svc-survey-logo__image",
  headerText: "svc-survey-header__text",
  navigationButton: "",
  completedPage: "svc-survey-completedpage",
  navigation: {
    complete: "svc-survey-btn svc-survey-footer__complete-btn",
    prev: "svc-survey-btn svc-survey-footer__prev-btn",
    next: "svc-survey-btn svc-survey-footer__next-btn",
    start: "svc-survey-btn svc-survey-footer__start-btn",
    preview: "svc-survey-btn svc-survey-footer__preview-btn",
    edit: "svc-survey-btn svc-survey-footer__edit-btn",
  },
  panel: {
    title: "svc-survey-title svc-survey-panel__title",
    titleExpandable: "svc-survey-panel__title--expandable",
    titleOnExpand: "svc-survey-panel__title--expanded",
    titleOnError: "svc-survey-panel__title--error",
    description: "svc-survey-description svc-survey-panel__description",
    container: "svc-survey-panel svc-survey-row__panel",
    content: "svc-survey-panel__content",
    icon: "svc-survey-panel__icon",
    iconExpanded: "svc-survey-panel__icon--expanded",
    footer: "svc-survey-panel__footer",
    requiredText: "svc-survey-panel__required-text",
  },
  paneldynamic: {
    root: "svc-survey-paneldynamic",
    navigation: "svc-survey-paneldynamic__navigation",
    title: "svc-survey-title svc-survey-question__title",
    button: "svc-survey-btn",
    buttonRemove: "svc-survey-paneldynamic__remove-btn",
    buttonAdd: "svc-survey-paneldynamic__add-btn",
    progressTop:
      "svc-survey-paneldynamic__progress svc-survey-paneldynamic__progress--top",
    progressBottom:
      "svc-survey-paneldynamic__progress svc-survey-paneldynamic__progress--bottom",
    buttonPrev: "svc-survey-paneldynamic__prev-btn",
    buttonNext: "svc-survey-paneldynamic__next-btn",
    progressContainer: "svc-survey-paneldynamic__progress-container",
    progress: "svc-survey-progress",
    progressBar: "svc-survey-progress__bar",
    progressText: "svc-survey-paneldynamic__progress-text",
    separator: "svc-survey-paneldynamic__separator",
  },
  progress: "svc-survey-progress svc-survey-body__progress",
  progressBar: "svc-survey-progress__bar",
  progressText: "svc-survey-progress__text",
  progressTextInBar: "svc-survey-hidden",
  page: {
    root: "svc-survey-page svc-survey-body__page",
    title: "svc-survey-title svc-survey-page__title",
    description: "svc-survey-description svc-survey-page__description",
  },
  pageTitle: "svc-survey-title svc-survey-page__title",
  pageDescription: "svc-survey-description svc-survey-page__description",
  row: "svc-survey-row svc-survey-clearfix",
  question: {
    mainRoot: "svc-survey-question svc-survey-row__question",
    flowRoot:
      "svc-survey-question svc-survey-row__question svc-survey-row__question--flow",
    asCell: "svc-survey-table__cell",
    header: "svc-survey-question__header",
    headerLeft: "svc-survey-question__header--location--left",
    headerTop: "svc-survey-question__header--location--top",
    headerBottom: "svc-survey-question__header--location--bottom",
    content: "svc-survey-question__content",
    contentLeft: "svc-survey-question__content--left",
    titleLeftRoot: "",
    titleOnAnswer: "svc-survey-question__title--answer",
    titleOnError: "svc-survey-question__title--error",
    title: "svc-survey-title svc-survey-question__title",
    requiredText: "svc-survey-question__required-text",
    number: "svc-survey-question__num",
    description: "svc-survey-description svc-survey-question__description",
    descriptionUnderInput:
      "svc-survey-description svc-survey-question__description",
    comment: "svc-survey-comment",
    required: "svc-survey-question--required",
    titleRequired: "svc-survey-question__title--required",
    indent: 20,
    footer: "svc-survey-question__footer",
    formGroup: "svc-survey-question__form-group",
    hasError: "",
    disabled: "svc-survey-question--disabled",
  },
  image: { root: "svc-survey-image", image: "sv_image_image" },
  error: {
    root: "svc-survey-question__erbox",
    icon: "",
    item: "",
    locationTop: "svc-survey-question__erbox--location--top",
    locationBottom: "svc-survey-question__erbox--location--bottom",
  },
  checkbox: {
    root: "svc-survey-selectbase",
    item: "svc-survey-item svc-survey-checkbox svc-survey-selectbase__item",
    itemSelectAll: "svc-survey-checkbox--selectall",
    itemNone: "svc-survey-checkbox--none",
    itemDisabled: "svc-survey-item--disabled svc-survey-checkbox--disabled",
    itemChecked: "svc-survey-checkbox--checked",
    itemHover: "svc-survey-checkbox--allowhover",
    itemInline: "svc-survey-selectbase__item--inline",
    label: "svc-survey-selectbase__label",
    labelChecked: "",
    itemControl: "svc-survey-visuallyhidden svc-survey-item__control",
    itemDecorator: "svc-survey-item__svg svc-survey-checkbox__svg",
    controlLabel: "svc-survey-item__control-label",
    materialDecorator:
      "svc-survey-item__decorator svc-survey-checkbox__decorator",
    other: "svc-survey-comment svc-survey-question__other",
    column: "svc-survey-selectbase__column",
  },
  radiogroup: {
    root: "svc-survey-selectbase",
    item: "svc-survey-item svc-survey-radio svc-survey-selectbase__item",
    itemInline: "svc-survey-selectbase__item--inline",
    label: "svc-survey-selectbase__label",
    labelChecked: "",
    itemDisabled: "svc-survey-item--disabled svc-survey-radio--disabled",
    itemChecked: "svc-survey-radio--checked",
    itemHover: "svc-survey-radio--allowhover",
    itemControl: "svc-survey-visuallyhidden svc-survey-item__control",
    itemDecorator: "svc-survey-item__svg svc-survey-radio__svg",
    controlLabel: "svc-survey-item__control-label",
    materialDecorator: "svc-survey-item__decorator svc-survey-radio__decorator",
    other: "svc-survey-comment svc-survey-question__other",
    clearButton: "svc-survey-btn svc-survey-selectbase__clear-btn",
    column: "svc-survey-selectbase__column",
  },
  boolean: {
    root: "",
    small: "svc-survey-row__question--small",
    item: "svc-survey-boolean svc-survey-item",
    control: "svc-survey-visuallyhidden",
    itemChecked: "svc-survey-boolean--checked",
    itemIndeterminate: "svc-survey-boolean--indeterminate",
    itemDisabled: "svc-survey-item--disabled svc-survey-boolean--disabled",
    switch: "svc-survey-boolean__switch",
    slider: "svc-survey-boolean__slider",
    label: "svc-survey-boolean__label ",
    disabledLabel: "svc-survey-boolean__label--disabled",
  },
  text: {
    root: "svc-survey-text",
    small: "svc-survey-row__question--small",
    onError: "svc-survey-text--error",
  },
  multipletext: {
    root: "svc-survey-multipletext",
    item: "svc-survey-multipletext__item",
    itemTitle: "svc-survey-multipletext__item-title",
    row: "svc-survey-multipletext__row",
    cell: "svc-survey-multipletext__cell",
  },
  dropdown: {
    root: "",
    small: "svc-survey-row__question--small",
    control: "svc-survey-dropdown",
    selectWrapper: "",
    other: "svc-survey-comment svc-survey-question__other",
    onError: "svc-survey-dropdown--error",
  },
  imagepicker: {
    root: "svc-survey-imagepicker",
    item: "svc-survey-imagepicker__item",
    itemInline: "svc-survey-imagepicker__item--inline",
    itemChecked: "svc-survey-imagepicker__item--checked",
    itemDisabled: "svc-survey-imagepicker__item--disabled",
    itemHover: "svc-survey-imagepicker__item--allowhover",
    label: "svc-survey-imagepicker__label",
    itemControl: "svc-survey-imagepicker__control",
    image: "svc-survey-imagepicker__image",
    itemText: "svc-survey-imagepicker__text",
    clearButton: "svc-survey-btn",
    other: "svc-survey-comment svc-survey-question__other",
  },
  matrix: {
    tableWrapper: "svc-survey-matrix",
    root: "svc-survey-table",
    rowError: "svc-survey-matrix__row--error",
    cell: "svc-survey-table__cell svc-survey-matrix__cell",
    headerCell: "svc-survey-table__cell svc-survey-table__cell--header",
    label: "svc-survey-item svc-survey-radio svc-survey-matrix__label",
    itemValue:
      "svc-survey-visuallyhidden svc-survey-item__control svc-survey-radio__control",
    itemChecked: "svc-survey-radio--checked",
    itemDisabled: "svc-survey-item--disabled svc-survey-radio--disabled",
    itemHover: "svc-survey-radio--allowhover",
    materialDecorator: "svc-survey-item__decorator svc-survey-radio__decorator",
    itemDecorator: "svc-survey-item__svg svc-survey-radio__svg",
    cellText: "svc-survey-matrix__text",
    cellTextSelected: "svc-survey-matrix__text--checked",
    cellTextDisabled: "svc-survey-matrix__text--disabled",
  },
  matrixdropdown: {
    root: "svc-survey-table",
    cell: "svc-survey-table__cell",
    headerCell: "svc-survey-table__cell svc-survey-table__cell--header",
  },
  matrixdynamic: {
    root: "svc-survey-table svc-survey-matrixdynamic",
    cell: "svc-survey-table__cell",
    headerCell: "svc-survey-table__cell svc-survey-table__cell--header",
    button: "svc-survey-btn",
    buttonAdd: "svc-survey-matrixdynamic__add-btn",
    buttonRemove: "svc-survey-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: "",
  },
  rating: {
    root: "svc-survey-rating",
    item: "svc-survey-rating__item",
    selected: "svc-survey-rating__item--selected",
    minText: "svc-survey-rating__min-text",
    itemText: "svc-survey-rating__item-text",
    maxText: "svc-survey-rating__max-text",
    disabled: "svc-survey-rating--disabled",
  },
  comment: {
    root: "svc-survey-comment",
    small: "svc-survey-row__question--small",
  },
  expression: "",
  file: {
    root: "svc-survey-file",
    other: "svc-survey-comment svc-survey-question__other",
    placeholderInput: "svc-survey-visuallyhidden",
    preview: "svc-survey-file__preview",
    fileSign: "svc-survey-hidden",
    fileSignBottom: "svc-survey-file__sign",
    fileDecorator: "svc-survey-file__decorator",
    fileInput: "svc-survey-visuallyhidden",
    noFileChosen: "svc-survey-description svc-survey-file__no-file-chosen",
    chooseFile: "svc-survey-btn svc-survey-file__choose-btn",
    disabled: "svc-survey-file__choose-btn--disabled",
    removeButton: "svc-survey-hidden",
    removeButtonBottom: "svc-survey-btn svc-survey-file__clean-btn",
    removeFile: "svc-survey-hidden",
    removeFileSvg: "svc-survey-file__remove-svg",
    wrapper: "svc-survey-file__wrapper",
  },
  signaturepad: {
    root: "svc-survey-signaturepad sjs_sp_container",
    small: "svc-survey-row__question--small",
    controls: "sjs_sp_controls",
    clearButton: "sjs_sp_clear",
  },
  saveData: {
    root: "",
    saving: "",
    error: "",
    success: "",
    saveAgainButton: "",
  },
  window: {
    root: "sv_window",
    body: "sv_window_content",
    header: {
      root: "sv_window_title",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: "",
    },
  },
};
