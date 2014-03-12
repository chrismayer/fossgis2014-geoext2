Ext.data.JsonP.Ext_util_TaskRunner_Task({"tagname":"class","name":"Ext.util.TaskRunner.Task","autodetected":{},"files":[{"filename":"TaskRunner.js","href":"TaskRunner.html#Ext-util-TaskRunner-Task"}],"members":[{"name":"fireOnStart","tagname":"property","owner":"Ext.util.TaskRunner.Task","id":"property-fireOnStart","meta":{}},{"name":"stopped","tagname":"property","owner":"Ext.util.TaskRunner.Task","id":"property-stopped","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Ext.util.TaskRunner.Task","id":"method-destroy","meta":{}},{"name":"restart","tagname":"method","owner":"Ext.util.TaskRunner.Task","id":"method-restart","meta":{}},{"name":"start","tagname":"method","owner":"Ext.util.TaskRunner.Task","id":"method-start","meta":{}},{"name":"stop","tagname":"method","owner":"Ext.util.TaskRunner.Task","id":"method-stop","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.util.TaskRunner.Task","short_doc":"Instances of this class are created by Ext.util.TaskRunner.newTask method. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task' target='_blank'>TaskRunner.js</a></div></pre><div class='doc-contents'><p>Instances of this class are created by <a href=\"#!/api/Ext.util.TaskRunner-method-newTask\" rel=\"Ext.util.TaskRunner-method-newTask\" class=\"docClass\">Ext.util.TaskRunner.newTask</a> method.</p>\n\n<p>For details on config properties, see <a href=\"#!/api/Ext.util.TaskRunner-method-start\" rel=\"Ext.util.TaskRunner-method-start\" class=\"docClass\">Ext.util.TaskRunner.start</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fireOnStart' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-property-fireOnStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-property-fireOnStart' class='name expandable'>fireOnStart</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Override default behavior ...</div><div class='long'><p>Override default behavior</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-stopped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-property-stopped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-property-stopped' class='name expandable'>stopped</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This flag is set to true by stop. ...</div><div class='long'><p>This flag is set to <code>true</code> by <a href=\"#!/api/Ext.util.TaskRunner.Task-method-stop\" rel=\"Ext.util.TaskRunner.Task-method-stop\" class=\"docClass\">stop</a>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys this instance, stopping this task's execution. ...</div><div class='long'><p>Destroys this instance, stopping this task's execution.</p>\n</div></div></div><div id='method-restart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-method-restart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-restart' class='name expandable'>restart</a>( <span class='pre'>[interval]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Restarts this task, clearing it duration, expiration and run count. ...</div><div class='long'><p>Restarts this task, clearing it duration, expiration and run count.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : Number (optional)<div class='sub-desc'><p>Optionally reset this task's interval.</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-start' class='name expandable'>start</a>( <span class='pre'>[interval]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts this task if it is not already started. ...</div><div class='long'><p>Starts this task if it is not already started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : Number (optional)<div class='sub-desc'><p>Optionally reset this task's interval.</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TaskRunner.Task'>Ext.util.TaskRunner.Task</span><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-Task-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner.Task-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops this task. ...</div><div class='long'><p>Stops this task.</p>\n</div></div></div></div></div></div></div>","meta":{}});