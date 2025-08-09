"use client"

import Button from "@/components/Button/Button";
import CardRequisito from "@/components/Card/CardRequisito";
import NavBar from "@/components/NavBar/NavBar";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaHeart, FaMoneyBillWave, FaRegHeart } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuHeartHandshake, LuHouse } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { TbCopy, TbUsers } from "react-icons/tb";

export default function Home() {
  return (

    <>
      <NavBar />
      <main className="space-y-8">
        <section className="space-y-2 grid grid-cols-2 gap-x-32 p-16 ">
          <div>
            <span className="border border-gray-100 rounded-full px-4 py-2 flex items-center w-fit gap-2 text-sm ">
              <MdOutlinePets className="text-granite-green rotate-12" />
              Adoção responsável
            </span>
            <h1 className="font-chelsea text-4xl text-primary-green mt-8">Instituto Anhangá</h1>
            <p className="font-medium text-granite-green">Resgatando vidas, construindo esperança</p>
            <p>
              Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado e reabilitação de cães abandonados. Cada animal merece uma segunda chance de ser feliz em um lar amoroso.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Button label="Quero adotar" type="button" prefix={<MdOutlinePets />} />
              <button className="bg-white text-primary-green border border-primary-green rounded-full font-medium px-4 py-3 gap-3 flex items-center w-full justify-center">
                <LuHeartHandshake className="text-lg" />
                Como ajudar
              </button>
            </div>
          </div>

          <img src="" alt="" />

        </section>

        <section className="p-16 ">
          prontos para um lar
        </section>


        <section className="py-16 px-48   bg-gray-100">
          <h2 className="text-2xl font-bold text-primary-green text-center mb-16">Quem Somos</h2>
          <p className="text-center">
            O Instituto Anhangá nasceu em 2018 do sonho de um grupo de volunários apaixonados por animais. Começamos pequenos, mas com um grande coração e determinação de fazer a diferença na vida dos cães e gatos abandonados. Hoje, já resgatamos mais de <span className="text-secondary-green font-medium">300 animais</span> e reailizamos mais de <span className="text-secondary-green font-medium">100 adoções</span> bem-sucedidas. Nossa missão é promover o bem-estar animal, educar a comunidade sobre a importância da adoção responsável e encontrar lares amorosos para nossos resgatados.
          </p>

          <div className="flex gap-16 justify-center items-center mt-8">
            <div className="flex flex-col gap-2 items-center">
              <span className="font-semibold text-2xl text-secondary-green">+ 300</span>
              <span>Animais resgatados</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="font-semibold text-2xl text-secondary-green">+ 100</span>
              <span>Adoções realizadas</span>
            </div>
          </div>
        </section>

        <section className="py-16 px-48">
          <h2 className="text-2xl font-bold text-primary-green text-center mb-2">Requisitos para adoção</h2>
          <p className="text-center text-granite-green mb-16">Para garantir o bem-estar dos nossos animais, temos alguns requisitos essenciais que todos os adotantes devem cumprir.</p>

          <div className="grid grid-cols-4 gap-12">
            <CardRequisito>
              <div className="bg-green-50 text-green-600 p-3 w-fit rounded-full">
                <TbUsers className="" />
              </div>
              <h3 className="font-medium">Idade Mínima</h3>
              <span className="text-primary-green text-lg font-medium">21 anos</span>
              <p className="text-sm text-gray-600">Para ser responsável legal pelo seu animal</p>
            </CardRequisito>

            <CardRequisito>
              <div className="bg-blue-50 text-blue-600 p-3 w-fit rounded-full">
                <IoDocumentTextOutline className="" />
              </div>
              <h3 className="font-medium">Documentos</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>CPF</li>
                <li>Comprovante de renda</li>
                <li>Comprovante de endereço</li>
              </ul>
            </CardRequisito>

            <CardRequisito>
              <div className="bg-yellow-50 text-yellow-600 p-3 w-fit rounded-full">
                <FaRegMoneyBillAlt className="" />
              </div>
              <h3 className="font-medium">Renda Mínima</h3>
              <span className="text-primary-green text-lg font-medium">2 salários</span>
              <p className="text-sm text-gray-600">Para custear os cuidados do animal</p>
            </CardRequisito>

            <CardRequisito>
              <div className="bg-purple-50 text-purple-600 p-3 w-fit rounded-full">
                <LuHouse className="" />
              </div>
              <h3 className="font-medium">Moradia</h3>
              <p className="text-sm text-gray-600">Ambiente adequado e seguro para o animal</p>

            </CardRequisito>
          </div>
        </section>

        <section className="py-16 px-48">
          <h2 className="text-2xl font-bold text-primary-green text-center mb-2">Processo de adoção</h2>
          <p className="text-center text-granite-green mb-16">Ao decidir adotar um pet, você passará por um processo de adoção que garante a segurança e o bem-estar dos animais.</p>

          <div className="bg-primary-green/10 rounded-md w-full p-8 grid grid-cols-4 gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-8 h-8 text-lg font-medium bg-primary-green text-white rounded-full flex justify-center items-center">1</div>
              <p>Escolha seu futuro melhor amigo</p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-8 h-8 text-lg font-medium bg-primary-green text-white rounded-full flex justify-center items-center">2</div>
              <p>Entre em contato conosco pelo Whatsapp</p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-8 h-8 text-lg font-medium bg-primary-green text-white rounded-full flex justify-center items-center">3</div>
              <p>Apresente os documentos solicitados</p>
            </div>

            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-8 h-8 text-lg font-medium bg-primary-green text-white rounded-full flex justify-center items-center">4</div>
              <p className="">Leve-o para casa</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-48">

          <div className="p-8 border border-gray-200 flex justify-between items-center rounded-xl">

            <div>
              <h2 className="text-2xl font-bold text-primary-green mb-2">Ajude nossa missão</h2>
              <p>Sua doação ajuda a comprar ração, pagar vacinas e garantir o bem-estar dos nossos animais. Qualquer valor faz a diferença!</p>
              <div className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg mt-8 mb-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-gray-500 text-sm">Chave PIX</span>
                  <span className="font-medium">36278602000152</span>
                </div>
                <TbCopy className="text-lg text-gray-600" />
              </div>
              <p className="text-gray-600 text-sm">Aponte a câmera do seu banco para o QR Code ao lado ou copie a chave acima.</p>
            </div>


            <div>qrcode</div>




          </div>

        </section>



      </main>
    </>


  );
}
