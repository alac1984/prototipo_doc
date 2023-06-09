Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Emergency Room","publishDate":"6/7/2023 4:58:35 PM","pages":[{"id":"39b339b6-2a2d-4813-8779-82993b29f76e","name":"Triage","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">This process handles the triage of a medical center. Additionally, launches processes according to the exams required, and manages the transfer of a patient.</span></p>","version":"1.0","author":"Bizagi Business Process Modeler.","image":"files\\diagrams\\Triage.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[{"id":"abc69f87-286a-4ab2-816b-8bde3e9f99fd","name":"This Process can be started from:","value":"Actions","type":"text","description":""}],"elements":[{"id":"43dbd0ed-e49c-4e14-b3e8-451aaad29545","name":"Triage","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":367.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"d2c2d887-c936-4fc3-b985-d5ef85d4c057","name":"Exams needed?","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":334.0,"y":227.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","elementSubType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Yes","elementType":"SequenceFlow","properties":[]},{"name":"No exams","elementType":"SequenceFlow","properties":[{"id":"ConditionType","name":"Condition Type","value":"Default","type":"text"}]}]},{"id":"7a2a8e8c-6aa2-47ed-b9d9-88ac9eadbc1d","name":"Perform triage","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Basic data from the patient health is taken. The user can decide whether take the patient to surgery or not.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.0,"y":106.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"Nurse","value":"e3219abd-7450-4a87-8ad0-0f87d6ff49f0","type":"resource","pageRef":"Resources"}],"properties":[{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"4 Hours","type":"text","description":""},{"id":"08f4e69a-0bd6-4335-876f-798f9fd36bae","name":"On Enter Action","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Adds a new empty triage result to be edited during the activity.</span></p>","type":"text","description":""},{"id":"4830abaa-6faf-419a-9d5e-8ed5e6605a54","name":"On Exit Actions","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Relates the patient results to the triage results entity.</span></p>","type":"text","description":""},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","value":"files\\attachments\\Triage_form.png","type":"image","description":""},{"id":"8578ecfc-8442-4b5c-aa6a-76d3fa6bfaad","name":"Is a Conditional Activity?","value":"No","type":"text","description":""}]},{"id":"9073cd18-d0c7-4a59-8f3a-c5fa0f507064","name":"Call ambulance and transfer","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Sets up an ambulance transfer to another medical center to start the surgery. If during the process a user determines that the patient needs surgery, this activity is launched in parallel.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.0,"y":41.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"Nurse","value":"e3219abd-7450-4a87-8ad0-0f87d6ff49f0","type":"resource","pageRef":"Resources"},{"name":"Doctor","value":"0be87e8d-911c-49e4-9872-26ae3340efa4","type":"resource","pageRef":"Resources"}],"properties":[{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"1 Hour","type":"text","description":""},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","value":"files\\attachments\\Call_ambulance_form.png","type":"image","description":""},{"id":"8578ecfc-8442-4b5c-aa6a-76d3fa6bfaad","name":"Is a Conditional Activity?","value":"Yes","type":"text","description":""},{"id":"e3747205-9f35-4185-acfa-85291679ad2d","name":"Condition","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">If the patient needs surgery, then launch this activity in parallel.</span></p>","type":"text","description":""}]},{"id":"0b4e8b95-8544-4cc7-a67d-88b1ba2adf4b","name":"Examine patient","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Based on the triage results, the user can launch the appropriate exam processes.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.0,"y":217.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"Doctor","value":"0be87e8d-911c-49e4-9872-26ae3340efa4","type":"resource","pageRef":"Resources"}],"properties":[{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"4 Hours","type":"text","description":""},{"id":"08f4e69a-0bd6-4335-876f-798f9fd36bae","name":"On Enter Action","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Reset the surgery Boolean.</span></p>","type":"text","description":""},{"id":"4830abaa-6faf-419a-9d5e-8ed5e6605a54","name":"On Exit Actions","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Relate the current case to the exams to be performed. Add the exams to be performed to the requested exams collection. Assign the current user as the attending doctor for this triage.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","value":"files\\attachments\\Examine_patient_form.png","type":"image","description":""},{"id":"8578ecfc-8442-4b5c-aa6a-76d3fa6bfaad","name":"Is a Conditional Activity?","value":"No","type":"text","description":""}]},{"id":"aa8a4bb3-c31a-4d75-885b-938ac58880cd","name":"Review exams","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Review the information regarding the exams performed.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":433.0,"y":217.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","performers":[{"name":"Doctor","value":"0be87e8d-911c-49e4-9872-26ae3340efa4","type":"resource","pageRef":"Resources"}],"properties":[{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"5 Hours","type":"text","description":""},{"id":"08f4e69a-0bd6-4335-876f-798f9fd36bae","name":"On Enter Action","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Reset the surgery Boolean.</span></p>","type":"text","description":""},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","value":"files\\attachments\\review_exams_form.png","type":"image","description":""},{"id":"8578ecfc-8442-4b5c-aa6a-76d3fa6bfaad","name":"Is a Conditional Activity?","value":"Yes","type":"text","description":""},{"id":"e3747205-9f35-4185-acfa-85291679ad2d","name":"Condition","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">When all the exams have been performed, this activity will be launched.</span></p>","type":"text","description":""}]}]}],"subPages":[]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","accountable":"Accountable","consulted":"Consulted","informed":"Informed","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"Go to Parent Process","calledBy":"Called by","attachmentsTooltip":"Show attachments","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","viewDetails":"View details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme","showMore":"Show more","showLess":"Show less","hideDescription":"Hide description","showDescription":"Show description","presentationActionLink":"View presentation action","goToLinkThrow":"Go to target event","goToLinkCatch":"Go to source event","goToSubProcess":"Go to sub-process","viewByList":"Process list","viewByTree":"Process hierarchy","diagramList":"Process list","folderTree":"Process hierarchy"},"resourcePage":{"id":"Resources","name":"Resources","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"e3219abd-7450-4a87-8ad0-0f87d6ff49f0","name":"Nurse","description":"The Nurse entity is a Stakeholder.","rol":"Entity"},{"id":"0be87e8d-911c-49e4-9872-26ae3340efa4","name":"Doctor","description":"The Doctor entity is a Stakeholder","rol":"Entity"}]},"searchMap":[{"containerId":"39b339b6-2a2d-4813-8779-82993b29f76e","containerName":"Triage","isSubprocess":false,"elements":[{"id":"43dbd0ed-e49c-4e14-b3e8-451aaad29545","value":"Triage"},{"id":"1cdaf266-70ba-42ad-b8b0-5ebac63e0b78","value":"Nurse"},{"id":"fa95494b-1203-46c2-8235-a2862372ec83","value":"Doctor"},{"id":"702212c4-aa0e-4f42-9715-73365adebd2c","value":""},{"id":"f7937bdf-97c9-4b18-842f-0fecd94b3dea","value":""},{"id":"b172f799-5e2a-4156-a350-3f5217302ef9","value":"Transfer patient"},{"id":"07bc7c4e-f0ce-4120-8581-51edb222a6e0","value":"No exams"},{"id":"2db4177e-d215-49dc-8b45-54fd3a0ab059","value":"After exams"},{"id":"d2c2d887-c936-4fc3-b985-d5ef85d4c057","value":"Exams needed?"},{"id":"7a2a8e8c-6aa2-47ed-b9d9-88ac9eadbc1d","value":"Perform triage"},{"id":"9073cd18-d0c7-4a59-8f3a-c5fa0f507064","value":"Call ambulance and transfer"},{"id":"0b4e8b95-8544-4cc7-a67d-88b1ba2adf4b","value":"Examine patient"},{"id":"aa8a4bb3-c31a-4d75-885b-938ac58880cd","value":"Review exams"}]}]}