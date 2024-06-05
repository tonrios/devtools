import { faGithub, faGooglePlay, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import devTheme from "../../../core/theme";
import Contact from "../../components/contact";
import TypingAnimation from "../../components/typingAnimation";

const AboutMePage = () => {
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState("us");

  return (
    <main className="flex-grow m-auto h-full  gap-6 flex flex-col md:flex-row justify-between sm:w-full md:w-[1250px] px-8 sm:px-0">
      <div className=" md:max-h-[122px] text-center h-full">
        <div>
          <Button disableRipple variant="text" sx={{ minHeight: 0, minWidth: 0, textTransform: "unset" }} onClick={() => setLang("us")}>
            en-US
          </Button>
          |
          <Button disableRipple variant="text" sx={{ minHeight: 0, minWidth: 0, textTransform: "unset" }} onClick={() => setLang("pt")}>
            pt-BR
          </Button>
        </div>

        <div className="p-8 mt-0 md:mt-4  flex md:flex-col justify-center  gap-4  md:gap-8 h-full">
          <IconButton
            disableRipple
            className="text-white hover:text-purple-300"
            onClick={() => {
              setShowContact(false);
            }}
            variant="text"
            color="inherit"
          >
            <FontAwesomeIcon fontSize={40} icon={faInfo} />
          </IconButton>
          <Divider />
          <IconButton disableRipple href="https://www.linkedin.com/in/tonrios" className="text-white hover:text-purple-300" target="_blank" variant="text" color="inherit">
            <FontAwesomeIcon fontSize={40} icon={faLinkedin} />
          </IconButton>

          <Divider />
          <IconButton disableRipple href="https://github.com/tonrios" className="text-white hover:text-purple-300" target="_blank" variant="text" color="inherit">
            <FontAwesomeIcon fontSize={40} icon={faGithub} />
          </IconButton>
          <Divider />
          <IconButton
            disableRipple
            href="https://play.google.com/store/apps/dev?id=6382285302246855872"
            className="text-white hover:text-purple-300"
            target="_blank"
            variant="text"
            color="inherit"
          >
            <FontAwesomeIcon fontSize={40} icon={faGooglePlay} />
          </IconButton>

          <Divider />

          <IconButton
            disableRipple
            className="text-white hover:text-purple-300"
            onClick={() => {
              setShowContact(!showContact);
            }}
            variant="text"
            color="inherit"
          >
            <FontAwesomeIcon fontSize={40} icon={faAt} />
          </IconButton>
        </div>
      </div>

      {showContact ? (
        <Contact />
      ) : (
        <div>
          <div className="w-60 h-60 rounded-full float-right shape-outside-ellipse m-8  overflow-hidden border-4 border-white md:right-auto">
            <img className="w-full h-full object-cover imagemBW" src="https://avatars.githubusercontent.com/u/15955698?v=4" alt="Sua Foto" />
          </div>

          {lang == "pt" ? (
            <div className="text-justify">
              <Typography variant="h4" component="h2" className="pb-8" style={{ textAlign: "center", color: devTheme.palette.secondary.main, marginBottom: 8 }}>
                <TypingAnimation text=">_ SOBRE MIM" speed={80} />
              </Typography>
              <p>
                <span className="text-secondary">Rivanilton Rios </span> é um profissional de tecnologia da informação com uma sólida formação acadêmica e uma ampla gama de
                experiências práticas. Sua jornada educacional inclui uma Pós-Graduação em Informática em Saúde pela<span className="text-secondary"> UNIFESP</span>, uma graduação
                em Sistemas de Informação pela<span className="text-secondary"> UNINOVE </span> e uma formação técnica em Informática para Internet pela
                <span className="text-secondary"> ETEC</span>.
              </p>
              <br />
              <p>
                Além de sua formação formal, Rivanilton complementou seus estudos com atividades extracurriculares significativas. Ele participou de intercâmbios de idiomas em
                Dublin na Irlanda, e em St. Julian's em Malta, <span className="text-secondary"> aprimorando o seu seguno idioma</span>. Além disso, ele realizou diversos cursos na
                área de desenvovimento em escolas renomadas como Ka Solution e Impacta.
              </p>
              <br />
              <p>
                Suas informações adicionais destacam sua vasta experiência em desenvolvimento de sistemas <span className="text-secondary"> CRM</span>,
                <span className="text-secondary"> ERP</span> e <span className="text-secondary"> WMS</span>, tanto no frontend quanto no backend, além de integrações. Ele também
                possui experiência em desenvolvimento mobile Android nativo e híbrido com
                <span className="text-secondary"> React Native</span>, tendo publicado aplicativos em lojas como
                <span className="text-secondary"> Android</span> e <span className="text-secondary">IOS</span>. Além disso, sua experiência inclui suporte técnico, redes,
                infraestrutura e manutenção de computadores.
              </p>
              <br />
              <p>
                No âmbito profissional, Rivanilton desempenhou papéis-chave em diversas empresas. Atualmente, ele atua como
                <span className="text-secondary"> Especialista em Programação</span>, liderando o desenvolvimento de aplicações CRM e ERP com foco em OPME. Anteriormente, ele
                trabalhou como Analista de Programação, desenvolvendo aplicações web e mobile em <span className="text-secondary">C# .NET</span> para a área da saúde, incluindo
                prontuários eletrônicos e sistemas de logística. Antes disso, como Analista de Suporte Jr., ele prestou suporte técnico e realizou diversas atividades de
                configuração e instalação de sistemas.
              </p>
              <br />
              <p>
                Com uma sólida base educacional e uma rica experiência profissional, Rivanilton Rios é um profissional versátil e
                <span className="text-secondary"> altamente capacitado</span>, capaz de enfrentar desafios complexos e
                <span className="text-secondary"> contribuir significativamente</span> para projetos de tecnologia da informação.
              </p>
            </div>
          ) : (
            <div className="text-justify">
              <Typography variant="h4" component="h2" className="pb-8" style={{ textAlign: "center", color: devTheme.palette.secondary.main, marginBottom: 8 }}>
                <TypingAnimation text=">_ ABOUT ME" speed={80} />
              </Typography>
              <p>
                <span className="text-secondary">Rivanilton Rios </span>is an information technology professional with a solid academic background and a wide range of practical
                experiences. His educational journey includes a Postgraduate degree in Health Informatics from<span className="text-secondary"> UNIFESP</span>, a Bachelor's degree
                in Information Systems from <span className="text-secondary"> UNINOVE </span>, and a technical education in Internet Computing from
                <span className="text-secondary"> ETEC</span>.
              </p>
              <br />
              <p>
                In addition to his formal education, Rivanilton supplemented his studies with significant extracurricular activities. He participated in language exchanges in
                Dublin in Ireland, and in St. Julian's in Malta, <span className="text-secondary"> enhancing his proficiency in his second language</span>. Furthermore, he
                completed various courses in development from renowned schools such as Ka Solution and Impacta.
              </p>
              <br />
              <p>
                His additional information highlights his extensive experience in developing <span className="text-secondary"> CRM</span>,
                <span className="text-secondary"> ERP</span> and <span className="text-secondary"> WMS</span> systems, both on the frontend and backend, as well as integrations. He
                also has experience in native and hybrid Android mobile development with <span className="text-secondary"> React Native</span>, having published applications on
                stores like <span className="text-secondary"> Android</span> and <span className="text-secondary">IOS</span>. Additionally, his experience includes technical
                support, networking, infrastructure, and computer maintenance.
              </p>
              <br />
              <p>
                In his professional career, Rivanilton has played key roles in various companies. Currently, he works as a{" "}
                <span className="text-secondary">Programming Specialist</span>, leading the development of CRM and ERP applications with a focus on OPME. Previously, he worked as a
                Programming Analyst, developing web and mobile applications in <span className="text-secondary">C# .NET</span> for the healthcare sector, including electronic
                medical records and logistics systems. Before that, as a Junior Support Analyst, he provided technical support and performed various configuration and system
                installation tasks.
              </p>
              <br />
              <p>
                With a solid educational foundation and rich professional experience, Rivanilton Rios is a versatile and <span className="text-secondary"> highly skilled </span>
                professional capable of tackling complex challenges and making <span className="text-secondary"> significant contributions</span> to information technology
                projects.
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default AboutMePage;
