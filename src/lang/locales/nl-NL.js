export const dateTimeFormats = {
  short: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }
};

export default {
  about_directus: "Over Directus",
  activity: "Activiteit",
  my_activity: "Mijn Activiteit",
  activity_log: "Activiteit Overzicht",
  activity_outside_directus: "Dit item is buiten Directus gecreëerd.",
  admin_email: "Admin Email",
  admin_password: "Admin Wachtwoord",
  additional_info: "Overige Info",
  add_new: "Nieuw item",
  add_field_filter: "Voeg een filter toe",
  add_note: "Voeg een hint toe voor de eindgebruiker...",
  admin_settings: "Admin Instellingen",
  almost_done_options: "Bijna klaar! Nog een paar instellingen te gaan",
  almost_done_copy:
    "Elke interface kan naar behoeven worden ingesteld. Dit zijn de opties voor deze interface. Sommigen zijn vereist.",
  all: "Alle",
  statuses: "Statussen",
  api_url: "API URL",
  api_installed: "API Succesvol Geïnstalleerd",
  auto_generated: "Automatisch gegenereerd...",
  batch: "Meerdere",
  batch_edit: "Meerdere items wijzigen in: {collection}",
  batch_delete: "Meerdere verwijderen",
  batch_delete_confirm:
    "Geen items geselecteerd | Weet je zeker dat je dit item wilt verwijderen? Dit kan niet ongedaan gemaakt worden. | Weet je zeker dat je {count} items wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  between: "Tussen",
  both: "Beiden",
  bookmarks: "Bladwijzers",
  cancel: "Annuleer",
  change_project: "Wijzig Project",
  choose_one: "Kies",
  choose_project: "Kies Project",
  choose_interface: "Kies een interface om de data mee te beheren.",
  clear: "Verwijder",
  click_to_toggle_all_none: "Klik om het hele veld aan of uit te zetten.",
  connection: "Connectie",
  collection: "Collectie",
  collections_and_fields: "Collecties & Velden",
  collection_updated: "{collection} Collectie Geüpdatet",
  collection_removed: "{collection} Collectie verwijderd",
  collection_names_cannot_be_changed:
    "Collectie namen kunnen niet gewijzigd worden.",
  collections: "Collecties",
  collection_count: "Geen Collecties | Één Collectie | {count} Collecties",
  "collections-directus_files": "Bestanden",
  "collections-directus_users": "Gebruikers",
  "collections-directus_activity": "Activiteit",
  comment: "Reactie",
  comments: "Reacties",
  coming_soon: "Coming Soon",
  contains: "Bevat",
  config_error: "Configuratie Ontbreekt",
  config_error_copy: "Dubbelcheck of het configuratie bestand bestaat.",
  collection_contains_items: "{collection} bevat {count} items",
  currently_selected: "Geselecteerd: {thing}",
  create: "Maak",
  creating_item: "Item aan het maken",
  creating_item_page_title: "Item aan het maken in {collection}",
  creating_role: "Rol aan het maken",
  create_role: "Maak rol",
  create_field: "Maak veld",
  update_field: "Update veld",
  create_collection: "Maak collectie",
  database_connection: "Database connectie",
  database_connection_copy: "Hoe kunnen we met de database verbinding maken?",
  datatype: "Datatype",
  db_datatype: "{db} Datatype",
  editing_my_profile: "Mijn profiel wijzigen",
  fieldtypes: {
    alias:
      "Velden die geen informatie opslaan en geen eigen kolom hebben in de database",
    array: "Gebruik een JSON array in de data",
    datetime: "Een datum en tijd in ISO, bijv.: 2018-09-19T14:00:43.381Z",
    date: "Datum, bijv.: 2018-09-19",
    time: "Tijd, bijv.: 14:09:22",
    file: "Foreign key naar directus_files.id",
    group: "Groepeer andere velden.",
    integer: "Nummer zonder decimalen",
    decimal: "Nummer met decimalen",
    json: "JSON object in de API resultaten",
    lang: "Specifiek voor vertalingen, dit veld slaat de taal op",
    m2o: "Many-to-One Relatie",
    o2m: "One-to-Many Relatie",
    sort: "Gebruikt om items van een volgorde te voorzien",
    status: "Gebruikt om de workflow te beheren",
    string: "Tekst, nummers, spaties of symbolen.",
    translation:
      "Vertaling. Dit veld slaat de one-to-many relatie op met de vertalingen collectie",
    uuid: "Universally Unique Identifier",
    datetime_created: "Datum en tijd wanneer het item werd aangemaakt.",
    datetime_updated: "Datum en tijd wanneer het item werd geüpdatet.",
    user_created: "Gebruiker die het item heeft aangemaakt.",
    user_updated: "Gebruiker die het item heeft geüpdatet."
  },
  datatypes: {
    mysql: {
      CHAR:
        "Tekst voorzien van spaties aan de rechterkant om ervoor te zorgen dat de lengte altijd hetzelfd is",
      VARCHAR: "Tekst met een variabele lengte.",
      TINYTEXT: "Tekst met een maximale lengte van 255 karakters.",
      TEXT: "Tekst met een maximale lengte van 65.535 karakters.",
      MEDIUMTEXT: "Tekst met een maximale lengte van 16.777.215 karakters.",
      LONGTEXT: "Tekst met een maximale lengte van 4.294.967.295 karakters.",

      BOOLEAN: "Goed of fout, aan of uit, true of false.",
      TINYINT:
        "Een nummer. 'signed' lengte is -128 tot 127, unsigned lengte is 255.",
      SMALLINT:
        "Een nummer. 'signed' lengte is -32.768 tot 32.767. unsigned lengte is 65.535.",
      MEDIUMINT:
        "Een nummer. 'signed' lengte is -8.388.608 tot 8.388.607. unsigned lengte is 16.777.215.",
      INT:
        "Een nummer. 'signed' lengte is -2.147.483.648 tot 2.147.483.647. unsigned lengte is 4.294.967.295.",
      BIGINT:
        "Een nummer. 'signed' lengte is -9.223.372.036.854.775.808 tot 9.223.372.036.854.775.807. unsigned lengte is 18.446.744.073.709.551.615.",

      DECIMAL: "Een nummer met decimalen.",
      FLOAT: "Een nummer met decimalen.",
      DOUBLE: "Een nummer met decimalen.",

      DATE: "Een datum. Accepteert `1000-01-01` tot `9999-12-31`.",
      DATETIME:
        "Datum en tijd. Accepteert `1000-01-01 00:00:00` tot `9999-12-31 23:59:59`.",
      TIMESTAMP:
        "Datum en tijd. Accepteert `1970-01-01 00:00:01` UTC tot `2038-01-19 03:14:07` UTC.",
      TIME: "Een tijd. Accepteert `-838:59:59` to `838:59:59`.",
      YEAR: "Een jaar. Accepteert `1901` to `2155` or `0000`"
    }
  },
  date_and_time: "Datum en Tijd",
  db_user: "Database Gebruiker",
  db_password: "Database Gebruikers Wachtwoord",
  db_name: "Database Naam",
  db_type: "Database Type",
  db_column_name: "Database kolom naam...",
  default: "Standaard",
  delete: "Verwijder",
  delete_are_you_sure:
    "Weet je zeker dat je dit item wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  delete_collection_are_you_sure:
    "Weet je zeker dat je deze collectie wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  delete_field_are_you_sure:
    "Weet je zeker dat je het {field} veld wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  delete_role_are_you_sure:
    "Weet je zeker dat je de {role} rol wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  delete_bookmark: "Verwijder Bladwijzer",
  delete_bookmark_body:
    "Weet je zeker dat je deze bladwijzer wilt verwijderen? Dit kan niet ongedaan gemaakt worden.",
  description: "Beschrijving",
  delete_confirmation: "Verwijderen",
  dialog_beginning: "Start van het dialoog scherm.",
  discard_changes: "Wijzigingen ongedaan maken",
  display_name: "Getoonde naam",
  drop_files:
    "Je kunt geen bestanden plaatsen | Sleep bestand hier... | Sleep bestanden hier...",
  dont_show: "Verberg",
  editing: "Item aan het wijzigen in {collection}",
  editing_item: "Item aan het wijzigen",
  editing_items: "{count} items aan het wijzigen",
  editing_single: "{collection} aan het wijzigen",
  email_address: "Emailadres",
  email: "Email",
  empty_collection: "Lege collectie",
  empty_collection_body: "Er zijn nog geen items in deze collectie",
  enable_manual_sorting: "Activeer handmatige volgorde",
  enter_value: "Voeg waarde toe",
  enter_collection_name: "Voer collectienaam in...",
  enter_role_name: "Voer rolnaam in...",
  environment: "Omgeving",
  project_key: "Project Sleutel",
  errors: {
    "-1": "Kan API niet bereiken",
    11: "Kan niet met de database verbinden",
    100: "Verkeerde gebruikersnaam of wachtwoord",
    101: "Uitgelogd door inactiviteit",
    102: "Uitgelogd door inactiviteit",
    103: "Gebruiker non-actief",
    106: "Verkeerde gebruikersnaam of wachtwoord",
    107: "Gebruiker niet gevonden"
  },
  error_unknown: "Onbekende fout. Probeer het later nog eens.",
  esc_cancel: "Escape zal het scherm sluiten.",
  equal_to: "Gelijk aan",
  existing: "Bestaande",
  fetching_data: "Data ophalen",
  field: "Veld",
  field_type: "Veld Type",
  field_created: "{field} Veld Gecreëerd",
  field_updated: "{field} Veld Geüpdatet",
  field_removed: "{field} Veld Verwijderd",
  fields: "Velden",
  fields_are_saved_instantly: "Wijzigingen worden meteen opgeslagen",
  file: "Bestand",
  file_library: "Bestandsbibliotheek",
  file_upload: "Upload Bestand(en)",
  forgot_password: "Wachtwoord vergeten",
  greater_than_equal: "Groter dan of gelijk aan",
  greater_than: "Groter dan",
  help_and_docs: "Help & Documentatie",
  keep_editing: "Blijf wijzigen",
  hidden_detail: "Verborgen op het detail scherm",
  hidden_browse: "Verborgen op het overzicht scherm",
  host: "Host",
  in_list: "Één van de volgende",
  initial_schema: "Kies een schema om mee te beginnen",
  initial_schema_copy:
    "Kies uit een bestaande database indeling. Je kunt dit later altijd wijzigen.",
  interface: "Interface",
  interface_count: "Geen Interfaces | Één Interface | {count} Interfaces",
  interfaces: "Interfaces",
  info: "Info",
  intelligent_defaults:
    "Geavanceerde opties laten je bepalen hoe data wordt opgeslagen in de database",
  interface_settings:
    "Elke interface kan aangepast worden naar wens. Hieronder vind je alle opties die beschikbaar zijn voor deze interface",
  install: "Installeer",
  install_copy:
    "Deze API is not niet geïnstalleerd. Wil je hem nu installeren?",
  is_empty: "Is leeg",
  is_not_null: "Is niet NULL",
  is_null: "Is NULL",
  item_count: "Geen items | Één item | {count} items",
  event_count: "Geen Events | Één Event | {count} Events",
  role_count: "Geen rollen | Één rol | {count} rollen",
  item_count_filter:
    "Geen gefilterde items | Één gefilterd item | {count} gefilterde items",
  item_deleted: "Item verwijderd",
  item_saved: "Item opgeslagen | {count} items opgeslagen",
  junction_collection: "Verbindingscollectie",
  cant_disable_primary:
    "Je kunt primary key niet ongedaan maken op een bestaand veld.",
  extension_error:
    "Er was een probleem tijdens het laden van de {ext} extensie.",
  extensions_missing: "Geen extensies gevonden",
  extensions_missing_copy:
    "Dubbelcheck of de systeem extensies zijn geïnstalleerd",
  latency: "Vertraging",
  learn_more: "Meer info",
  leave_comment: "Plaats een reactie...",
  length: "Lengte",
  less_than_equal: "Minder dan of gelijk aan",
  less_than: "Minder dan",
  limited: "Gelimiteerd",
  loading: "Aan het laden...",
  loading_more: "Meer items aan het laden...",
  login: "Log in",
  m2m: "Many-to-Many (M2M)",
  m2o: "Many-to-One (M2O)",
  o2m: "One-to-Many (O2M)",
  name: "Naam",
  name_field: "Hoe wil je deze kolom noemen?",
  navigate_changes:
    "Weet je zeker dat je de pagina wilt verlaten? Niet opgeslagen wijzigingen gaan verloren",
  new: "Nieuw",
  new_file: "Nieuw bestand",
  no_related_entries: "Heeft geen gerelateerd items",
  not_between: "Niet tussen",
  not_contains: "Bevat niet",
  note: "Notitie",
  note_note: "Een interne beschrijving...",
  note_hidden:
    "[Meer info](https://docs.directus.io/app/admin/collections.html#hidden)",
  note_icon: "The icon shown in the App's navigation sidebar",
  note_managed:
    "[Meer info](https://docs.directus.io/app/admin/collections.html#managing-collections)",
  note_single:
    "[Meer info](https://docs.directus.io/app/admin/collections.html#single)",
  no_results: "Geen resultaten",
  no_results_body: "Er zijn geen items die voldoen aan de huidige filters",
  no_collections: "Geen collecties",
  no_collections_body: "Er zijn nog geen collecties aangemaakt.",
  no_fields: "Geen velden",
  no_fields_body: "Het ziet er naar uit dat deze collectie geen velden bevat.",
  no_files: "Geen bestanden",
  no_files_body:
    "Het ziet er naar uit dat er nog geen bestanden zijn geüploadet.",
  numeric: "Nummer",
  page_not_found: "Pagina niet gevonden",
  page_not_found_body:
    "Deze pagina of item bestaat niet of is recentelijk verwijderd.",
  permissions: "Permissies",
  name_bookmark: "Hoe wil je deze bladwijzer noemen?",
  next: "Volgende",
  none: "Geen",
  not_empty: "Is niet leeg",
  not_equal_to: "Is niet gelijk aan",
  not_in_list: "Is niet één van deze",
  no_interface_error: "Veld {field} heeft geen interface geconfigureerd",
  manage: "Beheer",
  max_size: "Max. Formaat: {size}",
  max_one_primary_key: "Je kunt maar één primary key per collectie hebben",
  dont_manage: "Beheer niet",
  dont_manage_copy:
    "Permissies, voorkeuren en instellingen voor de {collections} collectie worden permament verwijderd. Weet je dit zeker?",
  more_options: "Meer opties",
  mixed: "Mixed",
  my_profile: "Mijn profiel",
  other: "Overige",
  ok: "Oké",
  operator: "Operatie",
  open_on_gh: "Open in GitHub",
  options: "Opties",
  password: "Wachtwoord",
  password_reset_sent: "Wachtwoord reset email verstuurd naar {email}",
  permissions_no_collections: "Dit project heeft nog geen collecties.",
  permissions_admin:
    "Administratoren hebben volledige toegang tot het systeem.",
  permission_states: {
    none: "Geen",
    mine: "Van mij",
    role: "In rol",
    full: "Alle",
    read: "Alleen lezen",
    create: "Maken",
    on_create: "Tijdens aanmaken",
    update: "Updaten",
    on_update: "Tijdens updaten",
    always: "altijd"
  },
  popular: "Populair",
  powered_by_directus: "Powered by Directus",
  preview_and_revert: "Voorvertoning en ongedaan maken",
  primary_key: "Primary Key",
  port: "Port",
  project: "Project",
  project_name: "Project Naam",
  project_info: "Project Informatie",
  project_info_copy: "Hieronder een aantal vragen over je eerste project.",
  read: "Zichtbaar",
  readable_fields: "Zichtbare velden",
  readable_fields_copy: "Selecteer de velden die de gebruiker kan zien",
  readonly: "Alleen lezen",
  relational: "Relationeel",
  report_issue: "Rapporteer probleem",
  request_feature: "Vraag nieuwe feature aan",
  regex: "RegEx",
  relation_setup:
    "Dit is een relationeel veld. We moeten de relatie configureren.",
  relation_setup_copy:
    "Er zijn verschillende types relaties. Deze interface gebruikt een {relation} relatie.",
  related_entries: "Heeft gerelateerde entries",
  related_collection: "Gerelateerde collecties",
  remove: "Verwijder",
  remove_related: "Verwijder gerelateerd item",
  relationship: "Relatie",
  required: "Vereist",
  reset_preferences: "Reset alle weergaveopties",
  reset_password: "Reset wachtwoord",
  revert: "Terugzetten",
  revert_copy:
    "Weet je zeker dat je dit item wilt terugzetten naar hoe het was op {date}?",
  roles: "Gebruikersrollen",
  role_settings: "Rol Instellingen",
  save: "Sla op",
  save_and_add: "Sla op en voeg nieuwe toe",
  save_and_stay: "Sla op en blijf bewerken",
  save_as_copy: "Sla op als een kopie",
  save_as_bookmark: "Save op als een bladwijzer",
  schema: "Schema",
  search: "Zoek",
  select_from_device: "Selecteer op je computer",
  select_existing: "Selecteer bestaande",
  select_field: "Selecteer een veld",
  select_fields: "Selecteer velden",
  search_interface: "Zoek een interface...",
  select_interface_below: "Selecteer een interface",
  select_statuses: "Selecteer statussen",
  select_statuses_copy: "Selecteer de statussen die de gebruiker kan gebruiken",
  settings: "Instellingen",
  settings_project: "Project Instellingen",
  settings_global: "Global Instellingen",
  settings_collections_fields: "Collecites & Velden",
  settings_permissions: "Rollen & Permissies",
  settings_extensions: "Extensies",
  server_details: "Server Details",
  server_error: "Server Error",
  server_error_copy: "Iets is mis met de project server of database",
  server_trouble: "Server Problemen",
  server_trouble_copy:
    "Probeer het later nog eens of neem contact op met je systeembeheerder.",
  advanced_options: "Geavanceerde opties",
  show_directus_collections: "Toon Directus systeem collecties",
  something_went_wrong: "Iets ging mis.",
  something_went_wrong_body:
    "We hebben wat problemen tijdens het verwerken van je verzoek. Probeer het later nog eens.",
  sign_in: "Log in",
  signing_in: "Aan het inloggen",
  sign_out: "Log out",
  sign_out_confirm: "Weet je zeker dat je uit wilt loggen?",
  sign_out_confirm_edits:
    "Weet je zeker dat je uit wilt loggen? Alle wijzigingen gaan verloren.",
  text: "Tekst",
  this_collection: "Deze collectie",
  to: "Aan",
  unsaved_changes_copy:
    "Je hebt onopgeslagen wijzigingen. Weet je zeker dat je deze pagina wilt verlaten?",
  user_directory: "Gebruikers",
  update: "Update",
  update_confirm: "Weet je zeker dat je {count} items wilt wijzigen?",
  unique: "Uniek",
  user_edit_warning:
    "{first_name} {last_name} is dit item ook aan het wijzigen.",
  value: "Waarde",
  values: "Waardes",
  validation: "Validatie",
  version: "Versie",
  version_and_updates: "Versie en Updates",
  view_type: "Bekijk als...",
  welcome: "Welkom",
  writable_fields: "Bewerkbare velden",
  writable_fields_copy: "Selecteer de velden die de gebruiker kan bewerken.",
  yes: "Ja",
  duplicating_field: "Veld aan het dupliceren",
  duplicate: "Dupliceer"
};
