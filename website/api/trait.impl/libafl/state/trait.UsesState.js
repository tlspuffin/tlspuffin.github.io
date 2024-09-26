(function() {
    var implementors = Object.fromEntries([["puffin",[["impl&lt;E, EM, I, M, Z&gt; UsesState for <a class=\"struct\" href=\"puffin/fuzzer/stages/struct.PuffinMutationalStage.html\" title=\"struct puffin::fuzzer::stages::PuffinMutationalStage\">PuffinMutationalStage</a>&lt;E, EM, I, M, Z&gt;<div class=\"where\">where\n    E: UsesState&lt;State = Z::State&gt;,\n    EM: UsesState&lt;State = Z::State&gt;,\n    M: Mutator&lt;I, Z::State&gt;,\n    Z: Evaluator&lt;E, EM&gt;,\n    Z::State: HasClientPerfMonitor + HasCorpus + HasRand,</div>"],["impl&lt;E, EM, Z&gt; UsesState for <a class=\"struct\" href=\"puffin/fuzzer/stats_stage/struct.StatsStage.html\" title=\"struct puffin::fuzzer::stats_stage::StatsStage\">StatsStage</a>&lt;E, EM, Z&gt;<div class=\"where\">where\n    EM: EventFirer + UsesState&lt;State = Z::State&gt;,\n    E: UsesState&lt;State = Z::State&gt;,\n    Z: Evaluator&lt;E, EM&gt;,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[867]}