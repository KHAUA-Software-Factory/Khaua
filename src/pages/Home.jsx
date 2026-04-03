import React from 'react';
import { Container, Button, Navbar, Row, Col, Card, Badge } from 'react-bootstrap';
import logoSt from '../assets/logo_st_2.png';
import logoGfjr from '../assets/logo_gfjr.png';
import {
    ArrowRight,
    Code2,
    Database,
    Layers,
    Construction,
    Terminal,
    Mail,
    Phone,
    MapPin,
    Building2,
    CheckCircle2,
    Workflow,
    ShieldCheck,
    BarChart3,
    Rocket,
    Cpu,
    Clock3
} from 'lucide-react';

const Home = () => {
    const COLORS = {
        DARK: '#140c0c',
        DARK_2: '#221313',
        ACCENT: '#c1121f',
        ACCENT_2: '#e11d2e',
        ACCENT_SOFT: '#fde8ea',
        TEXT: '#1f2937',
        TEXT_SOFT: '#6b7280',
        BORDER: '#ece5e5',
        BG: '#fff8f8',
        BG_2: '#fff1f2',
        WHITE: '#ffffff'
    };

    const services = [
        {
            icon: <Code2 size={22} color={COLORS.ACCENT} />,
            title: 'Sistemas sob medida',
            desc: 'Desenvolvimento de plataformas web, portais operacionais, painéis gerenciais e aplicações internas para processos críticos.'
        },
        {
            icon: <Database size={22} color={COLORS.ACCENT} />,
            title: 'Arquitetura de dados',
            desc: 'Estruturação de bases, modelagem relacional, integração entre sistemas e organização de dados para escala e governança.'
        },
        {
            icon: <Workflow size={22} color={COLORS.ACCENT} />,
            title: 'Automação de processos',
            desc: 'Eliminamos tarefas repetitivas, reduzimos retrabalho e conectamos fluxos internos para ganhar produtividade real.'
        },
        {
            icon: <BarChart3 size={22} color={COLORS.ACCENT} />,
            title: 'Dashboards e inteligência operacional',
            desc: 'Transformamos operação em indicadores acionáveis para apoiar decisão, controle e crescimento.'
        },
        {
            icon: <Cpu size={22} color={COLORS.ACCENT} />,
            title: 'Integrações e ecossistemas digitais',
            desc: 'Integramos APIs, CRMs, ERPs, bancos de dados, sistemas legados e serviços de terceiros.'
        },
        {
            icon: <ShieldCheck size={22} color={COLORS.ACCENT} />,
            title: 'Estrutura técnica confiável',
            desc: 'Projetos com foco em estabilidade, segurança, manutenção e evolução contínua do software.'
        }
    ];

    const differentials = [
        'Visão de negócio, tecnologia e operação no mesmo projeto',
        'Soluções desenhadas para reduzir gargalos e aumentar eficiência',
        'Arquitetura pensada para crescimento e manutenção',
        'Comunicação próxima, objetiva e orientada a entrega',
        'Foco em software que gera retorno real, não apenas presença digital',
        'Capacidade de transformar processos complexos em sistemas simples de operar'
    ];

    const process = [
        {
            title: 'Diagnóstico',
            desc: 'Entendemos sua operação, gargalos, metas e contexto real do negócio.'
        },
        {
            title: 'Desenho da solução',
            desc: 'Estruturamos arquitetura, fluxo, escopo e prioridades com visão prática.'
        },
        {
            title: 'Implementação',
            desc: 'Desenvolvemos com entregas consistentes, validação e foco em resultado.'
        },
        {
            title: 'Evolução',
            desc: 'Acompanhamos a operação e refinamos o sistema para ganho contínuo.'
        }
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: `linear-gradient(180deg, ${COLORS.BG} 0%, ${COLORS.BG_2} 100%)`,
                fontFamily: 'Inter, sans-serif',
                color: COLORS.TEXT
            }}
        >
            <Navbar
                expand="lg"
                variant="dark"
                className="sticky-top py-3"
                style={{
                    background: 'rgba(20,12,12,0.92)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}
            >
                <Container fluid="xxl" className="px-4 px-md-5">
                    <div className="d-flex align-items-center gap-3">
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 14,
                                background: 'rgba(193,18,31,0.12)',
                                border: '1px solid rgba(193,18,31,0.28)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Terminal size={22} color={COLORS.ACCENT_2} />
                        </div>

                        <Navbar.Brand href="/" className="mb-0 fw-bold fs-3">
                            KHAUA<span style={{ color: COLORS.ACCENT }}>.</span>
                        </Navbar.Brand>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <a href="#servicos" className="text-decoration-none d-none d-md-inline">
                            <span style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 600 }}>Serviços</span>
                        </a>
                        <a href="#processo" className="text-decoration-none d-none d-md-inline ms-3">
                            <span style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 600 }}>Processo</span>
                        </a>
                        <a href="#parceiros" className="text-decoration-none d-none d-md-inline ms-3">
                            <span style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 600 }}>Parceiros</span>
                        </a>
                        <a href="#contato" className="text-decoration-none d-none d-md-inline ms-3">
                            <span style={{ color: '#f3f4f6', fontSize: 14, fontWeight: 600 }}>Contato</span>
                        </a>

                        <Button
                            href="https://st.khaua.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-3"
                            style={{
                                backgroundColor: COLORS.ACCENT,
                                border: `1px solid ${COLORS.ACCENT}`,
                                color: '#fff',
                                borderRadius: 14,
                                fontWeight: 700,
                                padding: '10px 20px'
                            }}
                        >
                            Acesso do Cliente
                        </Button>
                    </div>
                </Container>
            </Navbar>

            <section style={{ position: 'relative', overflow: 'hidden' }}>
                <div
                    style={{
                        position: 'absolute',
                        width: 420,
                        height: 420,
                        borderRadius: '50%',
                        background: 'rgba(193,18,31,0.08)',
                        filter: 'blur(40px)',
                        top: -80,
                        right: -80
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        width: 320,
                        height: 320,
                        borderRadius: '50%',
                        background: 'rgba(193,18,31,0.06)',
                        filter: 'blur(35px)',
                        bottom: 20,
                        left: -80
                    }}
                />

                <Container fluid="xxl" className="px-4 px-md-5 py-5 py-lg-6">
                    <Row className="align-items-center g-5" style={{ minHeight: '86vh' }}>
                        <Col lg={7}>
                            <div
                                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
                                style={{
                                    backgroundColor: 'rgba(193,18,31,0.08)',
                                    border: '1px solid rgba(193,18,31,0.18)',
                                    color: COLORS.ACCENT,
                                    fontWeight: 700,
                                    fontSize: '0.78rem',
                                    letterSpacing: '0.6px'
                                }}
                            >
                                <Construction size={15} />
                                <span>SOFTWARE, AUTOMAÇÃO E ARQUITETURA PARA OPERAÇÕES REAIS</span>
                            </div>

                           <h1
    className="fw-bold mb-4"
    style={{
        fontSize: 'clamp(2.2rem, 4vw, 4rem)',
        lineHeight: '1.05',
        letterSpacing: '-1.5px',
        color: COLORS.DARK,
        maxWidth: 780
    }}
>
    Tecnologia sob medida para empresas que precisam
    <span style={{ color: COLORS.ACCENT }}>
        {' '}operar melhor, escalar com controle e crescer com inteligência.
    </span>
</h1>

                            <p
                                className="mb-4"
                                style={{
                                    fontSize: '1.18rem',
                                    lineHeight: '1.9',
                                    color: COLORS.TEXT_SOFT,
                                    maxWidth: 820
                                }}
                            >
                                A <strong>KHAUA.</strong> desenvolve sistemas, estruturas de dados e automações para
                                empresas que já entenderam que planilhas, retrabalho e processos improvisados travam crescimento.
                                Criamos software com visão de negócio: mais eficiência, mais controle, mais previsibilidade.
                            </p>

                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <a href="#contato" className="text-decoration-none">
                                    <Button
                                        size="lg"
                                        style={{
                                            borderRadius: 14,
                                            padding: '14px 28px',
                                            backgroundColor: COLORS.ACCENT,
                                            border: `1px solid ${COLORS.ACCENT}`,
                                            fontWeight: 700
                                        }}
                                    >
                                        Falar com a KHAUA <ArrowRight size={16} className="ms-1" />
                                    </Button>
                                </a>

                                <a href="#servicos" className="text-decoration-none">
                                    <Button
                                        size="lg"
                                        variant="light"
                                        style={{
                                            borderRadius: 14,
                                            padding: '14px 28px',
                                            fontWeight: 700,
                                            border: `1px solid ${COLORS.BORDER}`,
                                            background: '#fff'
                                        }}
                                    >
                                        Ver soluções
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-4 d-flex flex-wrap gap-2">
                                <Badge bg="light" text="dark" className="p-2 border">#SoftwareSobMedida</Badge>
                                <Badge bg="light" text="dark" className="p-2 border">#AutomaçãoDeProcessos</Badge>
                                <Badge bg="light" text="dark" className="p-2 border">#ArquiteturaDeDados</Badge>
                                <Badge bg="light" text="dark" className="p-2 border">#EficiênciaOperacional</Badge>
                            </div>
                        </Col>

                        <Col lg={5}>
                            <div
                                style={{
                                    background: 'rgba(255,255,255,0.88)',
                                    padding: 36,
                                    borderRadius: 30,
                                    border: '1px solid rgba(255,255,255,0.9)',
                                    boxShadow: '0 40px 100px rgba(20,12,12,0.08)',
                                    backdropFilter: 'blur(12px)'
                                }}
                            >
                                <div className="mb-4">
                                    <small
                                        className="fw-bold"
                                        style={{
                                            color: COLORS.ACCENT,
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        O QUE ENTREGAMOS
                                    </small>
                                    <h4 className="fw-bold mt-2 mb-0" style={{ color: COLORS.DARK }}>
                                        Estrutura digital para operações complexas
                                    </h4>
                                </div>

                                {[
                                    {
                                        icon: <CheckCircle2 size={20} color={COLORS.ACCENT} />,
                                        title: 'Menos retrabalho',
                                        desc: 'Automação e padronização de fluxos críticos.'
                                    },
                                    {
                                        icon: <Clock3 size={20} color={COLORS.ACCENT} />,
                                        title: 'Mais velocidade operacional',
                                        desc: 'Sistemas desenhados para reduzir atrito e tempo perdido.'
                                    },
                                    {
                                        icon: <Rocket size={20} color={COLORS.ACCENT} />,
                                        title: 'Mais escala com controle',
                                        desc: 'Arquitetura preparada para acompanhar crescimento.'
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="d-flex align-items-start gap-3 p-3 mb-3 rounded-4"
                                        style={{
                                            background: '#fff',
                                            border: `1px solid ${COLORS.BORDER}`,
                                            boxShadow: '0 12px 30px rgba(20,12,12,0.04)'
                                        }}
                                    >
                                        <div style={{ marginTop: 2 }}>{item.icon}</div>
                                        <div>
                                            <h6 className="fw-bold mb-1">{item.title}</h6>
                                            <small style={{ color: COLORS.TEXT_SOFT, lineHeight: 1.7 }}>{item.desc}</small>
                                        </div>
                                    </div>
                                ))}

                                <div
                                    className="mt-4 p-4 rounded-4"
                                    style={{
                                        background: COLORS.DARK,
                                        color: '#fff'
                                    }}
                                >
                                    <small style={{ color: '#fca5a5', letterSpacing: '1px' }} className="fw-bold d-block mb-2">
                                        POSICIONAMENTO
                                    </small>
                                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
                                        Não vendemos apenas desenvolvimento. Entregamos estrutura digital para empresas
                                        operarem melhor e tomarem decisões com mais inteligência.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="py-5 py-lg-6" style={{ backgroundColor: '#fff' }}>
                <Container fluid="xxl" className="px-4 px-md-5">
                    <Row className="g-4">
                        <Col lg={4}>
                            <div
                                className="h-100 p-4 p-md-5"
                                style={{
                                    background: COLORS.DARK,
                                    borderRadius: 28,
                                    color: '#fff',
                                    boxShadow: '0 24px 60px rgba(20,12,12,0.12)'
                                }}
                            >
                                <small className="fw-bold d-block mb-3" style={{ color: '#fca5a5', letterSpacing: '1px' }}>
                                    DIFERENCIAIS
                                </small>
                                <h2 className="fw-bold mb-3">Uma software factory com visão de operação e negócio.</h2>
                                <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: '1.8' }}>
                                    Nosso trabalho não começa no código. Começa em entender como sua empresa funciona,
                                    onde estão os gargalos e o que precisa mudar para a tecnologia gerar impacto real.
                                </p>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Row className="g-4">
                                {differentials.map((item, index) => (
                                    <Col md={6} key={index}>
                                        <Card
                                            className="h-100 border-0 shadow-sm"
                                            style={{ borderRadius: 22, background: COLORS.BG }}
                                        >
                                            <Card.Body className="p-4">
                                                <CheckCircle2 size={22} color={COLORS.ACCENT} className="mb-3" />
                                                <p className="mb-0 fw-semibold" style={{ lineHeight: '1.8', color: COLORS.TEXT }}>
                                                    {item}
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="servicos" className="py-5 py-lg-6" style={{ background: `linear-gradient(180deg, #fff 0%, ${COLORS.BG} 100%)` }}>
                <Container fluid="xxl" className="px-4 px-md-5">
                    <div className="text-center mb-5">
                        <small className="fw-bold" style={{ color: COLORS.ACCENT, letterSpacing: '1px' }}>
                            SOLUÇÕES
                        </small>
                        <h2
                            className="fw-bold mt-2"
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                                color: COLORS.DARK
                            }}
                        >
                            Tecnologia aplicada para resolver gargalos reais
                        </h2>
                        <p style={{ color: COLORS.TEXT_SOFT, fontSize: '1.05rem', maxWidth: 800, margin: '0 auto' }}>
                            Desenvolvemos soluções que estruturam a operação, eliminam ineficiências e criam base para crescimento sustentável.
                        </p>
                    </div>

                    <Row className="g-4">
                        {services.map((service, index) => (
                            <Col md={6} xl={4} key={index}>
                                <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 24 }}>
                                    <Card.Body className="p-4 p-md-5">
                                        <div
                                            className="mb-4"
                                            style={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: 14,
                                                background: COLORS.ACCENT_SOFT,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {service.icon}
                                        </div>

                                        <h5 className="fw-bold mb-3">{service.title}</h5>
                                        <p className="mb-0" style={{ color: COLORS.TEXT_SOFT, lineHeight: '1.85' }}>
                                            {service.desc}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id="processo" className="py-5 py-lg-6" style={{ backgroundColor: '#fff' }}>
                <Container fluid="xxl" className="px-4 px-md-5">
                    <div className="text-center mb-5">
                        <small className="fw-bold" style={{ color: COLORS.ACCENT, letterSpacing: '1px' }}>
                            COMO TRABALHAMOS
                        </small>
                        <h2 className="fw-bold mt-2" style={{ color: COLORS.DARK }}>
                            Um processo simples para projetos complexos
                        </h2>
                        <p style={{ color: COLORS.TEXT_SOFT, maxWidth: 760, margin: '0 auto' }}>
                            Clareza comercial, entendimento técnico e foco em execução. Sem excesso de ruído, sem floreio, sem improviso.
                        </p>
                    </div>

                    <Row className="g-4">
                        {process.map((step, index) => (
                            <Col md={6} xl={3} key={index}>
                                <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 24 }}>
                                    <Card.Body className="p-4 p-md-5">
                                        <div
                                            className="fw-bold mb-3"
                                            style={{
                                                fontSize: '2rem',
                                                color: COLORS.ACCENT
                                            }}
                                        >
                                            0{index + 1}
                                        </div>
                                        <h5 className="fw-bold">{step.title}</h5>
                                        <p className="mb-0" style={{ color: COLORS.TEXT_SOFT, lineHeight: '1.8' }}>
                                            {step.desc}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id="parceiros" className="py-5 py-lg-6" style={{ background: `linear-gradient(180deg, ${COLORS.BG} 0%, #fff 100%)` }}>
                <Container fluid="xxl" className="px-4 px-md-5">
                    <div className="text-center mb-5">
                        <small className="fw-bold" style={{ color: COLORS.ACCENT, letterSpacing: '1px' }}>
                            PARCEIROS & OPERAÇÕES
                        </small>
                        <h2 className="fw-bold mt-2" style={{ color: COLORS.DARK }}>
                            Projetos em operação e relações construídas com entrega
                        </h2>
                        <p style={{ color: COLORS.TEXT_SOFT }}>
                            Empresas e iniciativas que contam com soluções desenvolvidas pela KHAUA.
                        </p>
                    </div>

                    <Row className="g-4 justify-content-center">
                        <Col md={6} lg={5} xl={4}>
                            <Card className="h-100 border-0 shadow-sm text-center" style={{ borderRadius: 24 }}>
                                <Card.Body className="p-4 p-md-5">
                                    <img
                                        src={logoSt}
                                        alt="ST Imobiliária"
                                        style={{ height: 160, objectFit: 'contain', marginBottom: 24 }}
                                    />
                                    <h5 className="fw-bold">ST Imobiliária</h5>
                                    <p style={{ color: COLORS.TEXT_SOFT, lineHeight: '1.8' }}>
                                        Plataforma operacional desenvolvida para apoiar rotina, controle e produtividade da operação.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={5} xl={4}>
                            <Card className="h-100 border-0 shadow-sm text-center" style={{ borderRadius: 24 }}>
                                <Card.Body className="p-4 p-md-5">
                                    <img
                                        src={logoGfjr}
                                        alt="GFJr"
                                        style={{
                                            height: 160,
                                            objectFit: 'contain',
                                            marginBottom: 24,
                                            borderRadius: '100%'
                                        }}
                                    />
                                    <h5 className="fw-bold">GFJr</h5>
                                    <p style={{ color: COLORS.TEXT_SOFT, lineHeight: '1.8' }}>
                                        Plataforma institucional e atuação consultiva em transformação digital e estruturação tecnológica.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="contato" className="py-5 py-lg-6">
                <Container fluid="xxl" className="px-4 px-md-5">
                    <Row className="g-4 align-items-stretch">
                        <Col lg={5}>
                            <div
                                className="h-100 p-4 p-md-5"
                                style={{
                                    borderRadius: 30,
                                    background: COLORS.DARK,
                                    color: '#fff',
                                    boxShadow: '0 28px 70px rgba(20,12,12,0.16)'
                                }}
                            >
                                <small className="fw-bold d-block mb-3" style={{ color: '#fca5a5', letterSpacing: '1px' }}>
                                    CONTATO
                                </small>

                                <h2 className="fw-bold mb-3">Sua operação cresceu, mas seus processos não acompanharam?</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.9' }}>
                                    Esse é exatamente o tipo de cenário em que a KHAUA atua melhor.
                                    Vamos entender seu contexto e desenhar uma solução digital aderente à sua realidade.
                                </p>

                                <div className="mt-4">
                                    <a href="https://wa.me/5511988296774?text=Olá! Gostaria de conversar sobre uma solução com a KHAUA." className="text-decoration-none">
                                        <Button
                                            size="lg"
                                            style={{
                                                backgroundColor: COLORS.ACCENT,
                                                border: `1px solid ${COLORS.ACCENT}`,
                                                borderRadius: 14,
                                                fontWeight: 700,
                                                padding: '14px 24px'
                                            }}
                                        >
                                            Iniciar conversa agora
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7}>
                            <Row className="g-4">
                                <Col md={6}>
                                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 22 }}>
                                        <Card.Body className="p-4 p-md-5">
                                            <Mail size={22} className="mb-3" color={COLORS.ACCENT} />
                                            <h6 className="fw-bold">E-mail</h6>
                                            <p className="mb-0" style={{ color: COLORS.TEXT_SOFT }}>
                                                contato@khaua.com.br
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={6}>
                                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 22 }}>
                                        <Card.Body
                                            className="p-4 p-md-5"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                window.open(
                                                    'https://wa.me/5511988296774?text=Olá! Gostaria de falar sobre um projeto com a KHAUA.',
                                                    '_blank'
                                                )
                                            }
                                        >
                                            <Phone size={22} className="mb-3" color={COLORS.ACCENT} />
                                            <h6 className="fw-bold">WhatsApp Profissional</h6>
                                            <p className="mb-0" style={{ color: COLORS.TEXT_SOFT }}>
                                                +55 (11) 98829-6774
                                            </p>
                                            <small className="mt-2 d-inline-block fw-bold" style={{ color: COLORS.ACCENT }}>
                                                CLIQUE PARA INICIAR CONVERSA <ArrowRight size={12} />
                                            </small>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={6}>
                                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 22 }}>
                                        <Card.Body className="p-4 p-md-5">
                                            <MapPin size={22} className="mb-3" color={COLORS.ACCENT} />
                                            <h6 className="fw-bold">Localização</h6>
                                            <p className="mb-0" style={{ color: COLORS.TEXT_SOFT }}>
                                                Itupeva, SP · Brasil
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={6}>
                                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: 22 }}>
                                        <Card.Body className="p-4 p-md-5">
                                            <Building2 size={22} className="mb-3" color={COLORS.ACCENT} />
                                            <h6 className="fw-bold">Atendimento</h6>
                                            <p className="mb-0" style={{ color: COLORS.TEXT_SOFT }}>
                                                Projetos, estruturação tecnológica, automação e evolução de operação digital.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer
                className="py-4 mt-auto border-top"
                style={{
                    backgroundColor: COLORS.DARK,
                    color: '#d1d5db',
                    borderTop: '1px solid rgba(255,255,255,0.06)'
                }}
            >
                <Container fluid="xxl" className="px-4 px-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div>
                        <h5 className="fw-bold text-white mb-0">
                            KHAUA<span style={{ color: COLORS.ACCENT }}>.</span>
                        </h5>
                        <small style={{ fontSize: '11px' }}>Engineering Digital Results.</small>
                    </div>

                    <div className="mt-3 mt-md-0 text-md-end">
                        <small>© 2026 KHAUA. Labs | Software Factory</small>
                        <br />
                        <small style={{ fontSize: '10px' }}>Itupeva, SP · Brasil</small>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Home;
