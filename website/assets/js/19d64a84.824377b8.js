"use strict";(self.webpackChunktlspuffin_website=self.webpackChunktlspuffin_website||[]).push([[4174],{683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(4848),i=n(8453);const a={title:"Replaying Traces"},r=void 0,l={id:"guides/getting-started/replaying-traces",title:"Replaying Traces",description:"tlspuffin creates fuzzing inputs using high-level protocol abstractions.",source:"@site/docs/guides/getting-started/replaying-traces.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/replaying-traces",permalink:"/docs/guides/getting-started/replaying-traces",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Replaying Traces"},sidebar:"docs",previous:{title:"Fuzzing OpenSSL",permalink:"/docs/guides/getting-started/fuzzing-openssl"},next:{title:"Support Matrix",permalink:"/docs/references/support-matrix"}},c={},d=[{value:"Executing a Trace",id:"executing-a-trace",level:2},{value:"Replaying Against a Real Entity",id:"replaying-against-a-real-entity",level:2}];function o(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"tlspuffin"})," creates fuzzing inputs using high-level protocol abstractions.\nSuch an input is a ",(0,s.jsx)(t.em,{children:"trace"})," of the messages sent to the different ",(0,s.jsx)(t.em,{children:"agents"}),".\nUnlike standard fuzzers that can simply submit the generated inputs to the program under tests, executing a trace is a more involved process, including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"spawning the network agents involved in the trace"}),"\n",(0,s.jsx)(t.li,{children:"building protocol messages"}),"\n",(0,s.jsx)(t.li,{children:"transferring messages to agents"}),"\n",(0,s.jsx)(t.li,{children:"reading and parsing the outputs generated by the agents"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Therefore, ",(0,s.jsx)(t.em,{children:"tlspuffin"})," provides the ability to store all these steps in a ",(0,s.jsx)(t.code,{children:".trace"})," file and execute them on demand."]}),"\n",(0,s.jsx)(t.h2,{id:"executing-a-trace",children:"Executing a Trace"}),"\n",(0,s.jsxs)(t.p,{children:["Through the ",(0,s.jsx)(t.em,{children:"tlspuffin"})," CLI, the ",(0,s.jsx)(t.code,{children:"execute"})," command provides a simple way to execute a trace:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"./target/debug/tlspuffin execute 'seeds/tlspuffin::tls::seeds::seed_successful.trace'\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"Trace Validity",type:"note",children:(0,s.jsxs)(t.p,{children:["Not all traces are ",(0,s.jsx)(t.em,{children:"valid"})," traces in the sense of the protocol under test.\nIn particular, while fuzzing it is likely to generate invalid traces due to malformed or out-of-order messages.\nWhen trying to execute an invalid trace, the ",(0,s.jsx)(t.code,{children:"execute"})," command will signal whether the execution finished successfully and provide hints about the error encountered in case of failure."]})}),"\n",(0,s.jsx)(t.h2,{id:"replaying-against-a-real-entity",children:"Replaying Against a Real Entity"}),"\n",(0,s.jsxs)(t.p,{children:["While it is useful to let ",(0,s.jsx)(t.em,{children:"tlspuffin"})," spawn the agents involved in a trace, the communication between these agents is made through a harness interface wrapping the library under test.\nUsing the CLI ",(0,s.jsx)(t.code,{children:"tcp"})," command, it is also possible to replace the first agent of a trace with a real entity connected through TCP."]}),"\n",(0,s.jsx)(t.p,{children:"For example, one could start an OpenSSL server on port 44410:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"openssl s_server -key tlspuffin/assets/alice-key.pem -cert tlspuffin/assets/alice.pem -accept 44410\n"})}),"\n",(0,s.jsx)(t.p,{children:"And replay one of the seed traces against this server:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"./target/debug/tlspuffin tcp --port 44410 'seeds/tlspuffin::tls::seeds::seed_client_attacker_full.trace'\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);