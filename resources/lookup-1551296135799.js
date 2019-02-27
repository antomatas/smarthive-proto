(function(window, undefined) {
  var dictionary = {
    "26b49e3d-197e-4fae-9b96-e2da9aa3776c": "work_new_old",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Overview_old",
    "7d43407e-f806-4818-9208-7e83795a2798": "work_3",
    "d7fe817e-7511-40ab-80fd-df0fb9cefe47": "Settings_old",
    "7bb9e722-a6a8-49da-a748-a8a90222b212": "work_2",
    "2199f0cb-addf-4f24-a0dc-f5553c9fd3aa": "Work_hive_old",
    "046faeaf-0306-43a8-bbfd-64e98772cbfa": "settings",
    "7767ed83-1d5e-474f-968d-4456927b6987": "work",
    "50cd970e-8934-42be-8acf-982ab0d3bb54": "overview",
    "8398071a-d483-4c54-9469-02166be34755": "work_rejected",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);