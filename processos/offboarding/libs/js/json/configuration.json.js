Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Offboarding","publishDate":"6/7/2023 5:37:18 PM","pages":[{"id":"19524297-1803-4b3d-a1ca-b4ba8a0193cb","name":"Offboarding Process","version":"1.0","author":"Bizagi Process Modeler","image":"files\\diagrams\\Offboarding Process.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"e62e1ecd-5b70-483a-8a74-925f5efe035c","name":"Offboarding","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":877.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"6b7f5c42-495d-45ba-91ec-34bf3304db3f","name":"Receive Resignation/ Termination Letter","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Each time that an employee leaves the company or his/her contract must be terminated, a new case of Offboarding needs to be created. The first activity of the process is Receive the Resignation/Termination Letter. </span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">This is performed by the employees boss. </span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">It is necessary to include the reason for termination, termination date and resignation letter (if applicable). If it is a voluntary resignation the boss can create an activity plan to be executed for the employee before his or her departure. If it is a company induced termination the boss can edit a template of the Termination Letter. </span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":185.5,"y":99.0}],"radius":0.0,"height":64.0,"width":101.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"A Head of a deparment that needs to create a new case of offboarding","type":"text","description":""},{"type":"text"}]]}},{"id":"08f4e69a-0bd6-4335-876f-798f9fd36bae","name":"Notify assignment","value":"Yes","type":"text","description":""},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Receive_Resignation/_Termination_Letter</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal Activity Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\1_1_receiveresignation.jpg","type":"image","description":""}]]}},{"id":"4830abaa-6faf-419a-9d5e-8ed5e6605a54","name":"Actions","type":"table","description":"","table":{"headers":[{"id":"","value":"Type","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Set Case Creator as current assigned and Date of Request as today","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Save","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Generate the Termination Letter Template, the letter will be available on the form to be edited by the boss.","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Save","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"If the Onboarding process was used for the entry of the future ex-employee, the two cases are related. That way the Offboarding Process can access information such as access granted to the company´s systems and  items provided during the onboarding process. ","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Set the access rights that need to be cancel or disable, if the process is related to Onboarding, the information is load from the onboading data model, if not the information is load from a parameter table. ","type":"text","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"6c0afd80-ac6a-4f07-86c8-c3ee4ab98394","name":"Create Termination Plan","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">When an employee leaves the company it is necessary to perform different activities in different areas. An Human Resources analyst must decide what activities are needed to be performed. For example the analyst can choose the entities to which the employee must be disenrolled from.</span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Finally, if the company offers a severance package to the employee, the analyst must create it.</span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":457.0,"y":316.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"An analyst from the Human Resources Area","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Create_Termination_Plan</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal activity form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\2_createterminationplan.jpg","type":"image","description":""}]]}},{"id":"4830abaa-6faf-419a-9d5e-8ed5e6605a54","name":"Actions","type":"table","description":"","table":{"headers":[{"id":"","value":"Type","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Set the social security documents that need to be signed by the employee for the exits. ","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Sets the legal documents needed for the contract termination","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Sets the Company properties. If the process is related to Onboarding, the information is loaded from the onboarding data model, if not the information is loaded from a parameter table. ","type":"text","description":""}],[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Exit","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Remove the Social Security Documents that were not selected","type":"text","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"c468fe36-b1f1-4ffb-9675-eb2c23e2af62","name":"Check list to collect company property","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Before the employee leaves the company, he or she should return all the elements provided by the organization, such as computer, access cards, phone, etc. The activity includes a check list to assist in the process. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1016.0,"y":236.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"Human Resources Analyst","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Check_list_to_collect_company_property</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal activity form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\4_checklisttocollectcompany property.jpg","type":"image","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"fdab9959-97a2-41d9-a79b-3b572a581ec9","name":"Exit Interview","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">The exit interview is conducted by a Human Resources area of a departing employee. The exit interview is conducted to gather data for improving working conditions and retaining employees. </span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">The interview includes question related to work environment, workload, job satisfaction, frustrations and feedback concerning company policies or procedures.</span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1016.0,"y":316.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"A Psychologist of the Human Resources Area. ","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_exit_interview</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal Activity Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\5_exitinterview.jpg","type":"image","description":""}]]}},{"id":"4830abaa-6faf-419a-9d5e-8ed5e6605a54","name":"Actions","type":"table","description":"","table":{"headers":[{"id":"","value":"Type","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"808a0abe-07af-4830-994c-ab17b28fd673","name":"Type","value":"On Enter","type":"text","description":""},{"id":"deb2b9c5-6dcd-4605-bb01-531427386157","name":"Description","value":"Set the Exit Interview Questions","type":"text","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"d4e6ac5c-a994-45ea-ad05-59915f9359b3","name":"Update Payroll","description":"It is necessary to update the payroll after the departure of the employee.","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1629.0,"y":665.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementation","value":"WebService","type":"text"}]},{"id":"99ad6982-7b01-48be-b470-68fc6a986e0b","name":"Remove /Disable  User from  Company´s IS","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">When an employee leaves the company, it is necessary to disable or cancel the access rights to company&acute;s information.</span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">An IT analyst must perform each of the activities proposed in the to-do list included in the activity form. </span></p><p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1017.0,"y":776.0}],"radius":0.0,"height":70.0,"width":98.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"IT Analyst or Assistant","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Remove_Disable_user</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal Activity Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\6_remove_disable.jpg","type":"image","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"7e5b4159-7c20-4af0-8881-fae351a505fa","name":"Wait for Termination Date","description":"It is necessary to wait for the Termination Date to perform the next activities.  ","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":736.0,"y":331.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate","elementSubType":"IntermediateCatchEvent","properties":[{"id":"TimerEventDefinitionType","name":"Timer Date","value":"2011-02-12T00:00:00","type":"text"}]},{"id":"d513c9a5-2924-4b25-99ac-1f0f935de940","name":"Create Termination Pay","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">When an employee leaves the company receive an amount of money that includes unpaid salary, damages, compensation for loss of office and the provision of a non-cash benefit after termination. This pay is due immediately or soon after the employment ends. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1476.0,"y":665.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"Accounting Assistant","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Create_Termination_Pay</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Activity Principal Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\8_createterminationpay.jpg","type":"image","description":""}]]}},{"id":"8578ecfc-8442-4b5c-aa6a-76d3fa6bfaad","name":"Notifications","type":"table","description":"","table":{"headers":[{"id":"","value":"Description","description":""},{"id":"","value":"Recipients","description":""},{"id":"","value":"Email subject","description":""},{"id":"","value":"Email body","description":""}],"exportAsTable":true,"table":[[{"id":"b60670da-7a36-4232-a73f-c94da9afc113","name":"Description","value":"Email reported on completion of the case","type":"text","description":""},{"id":"5d49718b-2261-463f-aa25-ac6e58574b24","name":"Recipients","value":"Boss","type":"text","description":""},{"id":"916d3bf9-6063-4858-a93a-7121731415d8","name":"Email subject","value":"Offboarding Process","type":"text","description":""},{"id":"e1947e85-6eca-42a1-9a59-d5d782262afd","name":"Email body","value":"Good day\n\nThe offboarding process  <CaseLink> for<Termination.Employee.fullName> has successfully completed. \n\nBest Regards \nHuman Resources Team","type":"text","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"37c48ea2-8b87-4b78-9828-c63726981866","name":"Execute Activities before Termination Date","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">If the boss created an Activity Plan for the employee&acute;s departure in the Receive Resignation/ Termination Letter, the employee must complete all the activities before the termination date. The task includes a check list where the employee march each activity after it has been performed. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":416.0,"y":536.0}],"radius":0.0,"height":60.0,"width":110.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"The employee  who is leaving  the company","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Execute_activities_before_termination_date</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal Activiy Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\3_executeactivities.jpg","type":"image","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]},{"id":"bf512675-d381-437d-9dd2-c01f349f8b99","name":"Voluntary Resignation?","description":" The gateway validates the type of termination and decides what the next activities to be performed are. ","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\InclusiveGateway.png","imageBounds":{"points":[{"x":216.0,"y":326.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"InclusiveGateway","elementSubType":"InclusiveGateway","properties":[],"pageElements":[{"name":"Resignation /Laid Off","elementType":"SequenceFlow","properties":[{"id":"ConditionExpression","name":"Condition","value":"No matter for what reason the employee leaves the company, the Human Resources area needs to manage the activities for the employee’s departure, for this reason, it is always necessary to perform the Create Termination Plan task. ","type":"text"}]},{"name":"Resignation","elementType":"SequenceFlow","properties":[{"id":"ConditionExpression","name":"Condition","value":"If the employee voluntary resigned, his or her boss  can create a activity plan to do before departure. If it is the case, the process continues with the Execute Activities Before Termination Date task. ","type":"text"}]}]},{"id":"a2929547-a8c8-4382-ae4e-881417efb072","name":"Legal Actions for Termination","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">When an employee leaves the company, it is necessary to perform some further actions, for example remove the employee from the automatic payroll, Health Care Service, etc. Additionally the form includes a to-do list with some proposed documents needed for terminating the contract, such as a termination agreement, confidentiality agreement, exit medical examination, etc. </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1015.0,"y":420.0}],"radius":0.0,"height":75.0,"width":97.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[{"id":"e0681aa9-09f0-4be4-93bb-f8b6da0917f4","name":"Allocations","type":"table","description":"","table":{"headers":[{"id":"","value":"Condition","description":""},{"id":"","value":"Description","description":""}],"exportAsTable":true,"table":[[{"id":"6a19b728-2755-4f4d-af9c-09d76f55ea25","name":"Condition","value":"Hman Resources Analyst","type":"text","description":""},{"type":"text"}]]}},{"id":"15133f61-4f5b-4236-b719-dd79f9b6c533","name":"Forms","type":"table","description":"","table":{"headers":[{"id":"","value":"Name","description":""},{"id":"","value":"Description","description":""},{"id":"","value":"Prototype","description":""}],"exportAsTable":false,"table":[[{"id":"b39c7385-9ec5-498f-8a1c-bdb06d5dc8ad","name":"Name","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">frm_Legal_Actions_for_termination</span></p>","type":"text","description":""},{"id":"599be507-2816-4f7f-b7b3-11bdbdc36a1e","name":"Description","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Principal Activity Form</span></p>","type":"text","description":""},{"id":"ccddadca-11ff-42e5-b34d-5e00dbec7396","name":"Prototype","value":"files\\attachments\\7_legalactions.jpg","type":"image","description":""}]]}},{"id":"2d782805-dcd0-4c83-a7bf-10c823a6fe9d","name":"Duration","value":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text","description":""}]}]}],"subPages":[]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","accountable":"Accountable","consulted":"Consulted","informed":"Informed","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"Go to Parent Process","calledBy":"Called by","attachmentsTooltip":"Show attachments","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","viewDetails":"View details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme","showMore":"Show more","showLess":"Show less","hideDescription":"Hide description","showDescription":"Show description","presentationActionLink":"View presentation action","goToLinkThrow":"Go to target event","goToLinkCatch":"Go to source event","goToSubProcess":"Go to sub-process","viewByList":"Process list","viewByTree":"Process hierarchy","diagramList":"Process list","folderTree":"Process hierarchy"},"searchMap":[{"containerId":"19524297-1803-4b3d-a1ca-b4ba8a0193cb","containerName":"Offboarding Process","isSubprocess":false,"elements":[{"id":"e62e1ecd-5b70-483a-8a74-925f5efe035c","value":"Offboarding"},{"id":"e3e927be-003c-4a5d-969a-abcbf94547f8","value":"Boss"},{"id":"4e38b736-60c2-4b4d-90e7-679957700bb5","value":"Human Resources Area"},{"id":"a1d08a32-ba96-4eb4-9776-ce53da71fbbc","value":"Employee"},{"id":"2eaca975-3cf2-465f-babe-e702b89582ff","value":"Accounting Assistant"},{"id":"ddf32cb5-2415-4768-992b-8b457469bdb7","value":"IT Area"},{"id":"a050e966-cc72-4e0c-844c-f79b108d3cff","value":"Milestone 1"},{"id":"2d3e37f3-d60a-41cc-a40f-ea7b6c86408f","value":""},{"id":"6b7f5c42-495d-45ba-91ec-34bf3304db3f","value":"Receive Resignation/ Termination Letter"},{"id":"6c0afd80-ac6a-4f07-86c8-c3ee4ab98394","value":"Create Termination Plan"},{"id":"07995c41-1ae0-4bea-a4b1-516d11273826","value":""},{"id":"c468fe36-b1f1-4ffb-9675-eb2c23e2af62","value":"Check list to collect company property"},{"id":"fdab9959-97a2-41d9-a79b-3b572a581ec9","value":"Exit Interview"},{"id":"67ea9525-2679-4926-a72a-8f4c129bf8d2","value":""},{"id":"d4e6ac5c-a994-45ea-ad05-59915f9359b3","value":"Update Payroll"},{"id":"99ad6982-7b01-48be-b470-68fc6a986e0b","value":"Remove /Disable  User from  Company´s IS"},{"id":"7e5b4159-7c20-4af0-8881-fae351a505fa","value":"Wait for Termination Date"},{"id":"d513c9a5-2924-4b25-99ac-1f0f935de940","value":"Create Termination Pay"},{"id":"37c48ea2-8b87-4b78-9828-c63726981866","value":"Execute Activities before Termination Date"},{"id":"bf512675-d381-437d-9dd2-c01f349f8b99","value":"Voluntary Resignation?"},{"id":"12f689e7-aad6-4bf4-a12a-a45c38d9743f","value":""},{"id":"a2929547-a8c8-4382-ae4e-881417efb072","value":"Legal Actions for Termination"},{"id":"6107f204-e1bc-4ecc-9801-46d8e714055d","value":""}]}]}