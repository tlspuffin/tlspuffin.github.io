(function() {
    var type_impls = Object.fromEntries([["puffin",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-Debug-for-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TimeoutExecutor&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","puffin::fuzzer::libafl_setup::ConcreteExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Executor%3CEM,+Z%3E-for-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-Executor%3CEM,+Z%3E-for-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E, EM, Z&gt; Executor&lt;EM, Z&gt; for TimeoutExecutor&lt;E&gt;<div class=\"where\">where\n    E: Executor&lt;EM, Z&gt;,\n    EM: UsesState&lt;State = &lt;E as UsesState&gt;::State&gt;,\n    Z: UsesState&lt;State = &lt;E as UsesState&gt;::State&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_target\" class=\"method trait-impl\"><a href=\"#method.run_target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">run_target</a>(\n    &amp;mut self,\n    fuzzer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut Z</a>,\n    state: &amp;mut &lt;TimeoutExecutor&lt;E&gt; as UsesState&gt;::State,\n    mgr: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut EM</a>,\n    input: &amp;&lt;TimeoutExecutor&lt;E&gt; as UsesInput&gt;::Input,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ExitKind, Error&gt;</h4></section></summary><div class='docblock'>Instruct the target about the input and run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.post_run_reset\" class=\"method trait-impl\"><a href=\"#method.post_run_reset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">post_run_reset</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Custom Reset Handler, e.g., to reset timers</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_observers\" class=\"method trait-impl\"><a href=\"#method.with_observers\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">with_observers</a>&lt;OT&gt;(self, observers: OT) -&gt; WithObservers&lt;Self, OT&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    OT: ObserversTuple&lt;Self::State&gt;,</div></h4></section></summary><div class='docblock'>Wraps this Executor with the given [<code>ObserversTuple</code>] to implement [<code>HasObservers</code>]. <a>Read more</a></div></details></div></details>","Executor<EM, Z>","puffin::fuzzer::libafl_setup::ConcreteExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HasObservers-for-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-HasObservers-for-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; HasObservers for TimeoutExecutor&lt;E&gt;<div class=\"where\">where\n    E: HasObservers,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.observers\" class=\"method trait-impl\"><a href=\"#method.observers\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">observers</a>(&amp;self) -&gt; &amp;&lt;TimeoutExecutor&lt;E&gt; as UsesObservers&gt;::Observers</h4></section></summary><div class='docblock'>Get the linked observers</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.observers_mut\" class=\"method trait-impl\"><a href=\"#method.observers_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">observers_mut</a>(\n    &amp;mut self,\n) -&gt; &amp;mut &lt;TimeoutExecutor&lt;E&gt; as UsesObservers&gt;::Observers</h4></section></summary><div class='docblock'>Get the linked observers (mutable)</div></details></div></details>","HasObservers","puffin::fuzzer::libafl_setup::ConcreteExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; TimeoutExecutor&lt;E&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(executor: E, exec_tmout: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; TimeoutExecutor&lt;E&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new [<code>TimeoutExecutor</code>], wrapping the given <code>executor</code> and checking for timeouts.\nThis should usually be used for <code>InProcess</code> fuzzing.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_mode\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">batch_mode</a>(executor: E, exec_tmout: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; TimeoutExecutor&lt;E&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new [<code>TimeoutExecutor</code>], wrapping the given <code>executor</code> and checking for timeouts.\nWith this method batch mode is enabled.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_timeout\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_timeout</a>(&amp;mut self, exec_tmout: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>)</h4></section></summary><div class=\"docblock\"><p>Set the timeout for this executor</p>\n</div></details></div></details>",0,"puffin::fuzzer::libafl_setup::ConcreteExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UsesObservers-for-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-UsesObservers-for-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; UsesObservers for TimeoutExecutor&lt;E&gt;<div class=\"where\">where\n    E: UsesObservers,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Observers\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Observers\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Observers</a> = &lt;E as UsesObservers&gt;::Observers</h4></section></summary><div class='docblock'>The observers type</div></details></div></details>","UsesObservers","puffin::fuzzer::libafl_setup::ConcreteExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UsesState-for-TimeoutExecutor%3CE%3E\" class=\"impl\"><a href=\"#impl-UsesState-for-TimeoutExecutor%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; UsesState for TimeoutExecutor&lt;E&gt;<div class=\"where\">where\n    E: UsesState,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.State\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.State\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">State</a> = &lt;E as UsesState&gt;::State</h4></section></summary><div class='docblock'>The state known by this type.</div></details></div></details>","UsesState","puffin::fuzzer::libafl_setup::ConcreteExecutor"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[9472]}