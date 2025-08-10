<map version="1.0.1">
  <node TEXT="Fábrica de Testes">
    <node TEXT="Objetivos">
      <node TEXT="Qualidade"/>
      <node TEXT="Confiabilidade"/>
      <node TEXT="Cobertura"/>
      <node TEXT="Performance"/>
    </node>
    <node TEXT="Escopo">
      <node TEXT="API: FakeRest API"/>
      <node TEXT="Front-end: the-internet.herokuapp.com"/>
      <node TEXT="Dados: Pipeline CSV"/>
      <node TEXT="Carga: JMeter"/>
    </node>
    <node TEXT="Estratégia">
      <node TEXT="API">
        <node TEXT="Cypress + cy.request"/>
        <node TEXT="Validação de Schema (AJV)"/>
        <node TEXT="10 cenários"/>
      </node>
      <node TEXT="Front-end">
        <node TEXT="Cypress E2E"/>
        <node TEXT="Page Objects simples"/>
        <node TEXT="10 cenários"/>
      </node>
      <node TEXT="Dados">
        <node TEXT="Node + Jest"/>
        <node TEXT="Schema JSON para CSV"/>
        <node TEXT="10 cenários"/>
      </node>
      <node TEXT="Carga">
        <node TEXT="JMeter .jmx"/>
        <node TEXT="Metas de throughput/latência"/>
      </node>
    </node>
    <node TEXT="Ambiente">
      <node TEXT="API: https://fakerestapi.azurewebsites.net"/>
      <node TEXT="FE: https://the-internet.herokuapp.com"/>
    </node>
    <node TEXT="Riscos">
      <node TEXT="Instabilidade de ambientes"/>
      <node TEXT="Dados voláteis"/>
      <node TEXT="Limitações de rede"/>
    </node>
    <node TEXT="Entregáveis">
      <node TEXT="Código de testes"/>
      <node TEXT="Relatórios"/>
      <node TEXT="Mapa Mental"/>
      <node TEXT="README"/>
    </node>
    <node TEXT="Métricas">
      <node TEXT="Pass/Fail"/>
      <node TEXT="Tempo de execução"/>
      <node TEXT="Erros por feature"/>
    </node>
  </node>
</map>
