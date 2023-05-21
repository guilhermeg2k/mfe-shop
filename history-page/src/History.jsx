import useHistory from 'mainApp/HistoryStore';
import toast from 'react-simple-toasts';
import Collapsible from 'react-collapsible';

const CartItem = ({ name, imgUrl, price }) => {
  return (
    <div className="flex gap-2 ">
      <div className="w-32 ">
        <img src={imgUrl} alt={`Image of ${name}`} />
      </div>
      <div className="flex flex-col w-full justify-center">
        <div className="font-semibold ">{name}</div>
        <div className="self-end">
          <div>R$ {price}</div>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const { history } = useHistory();
  // const history = [
  //   {
  //     date: new Date(),
  //     totalPrice: 3000,
  //     items: [
  //       {
  //         id: 1,
  //         name: 'Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA GeForce, 12GB GDDR6, DLSS, Ray Tracing - RTX 3060 Ventus 2X 12G OC',
  //         price: 2999.99,
  //         url: 'https://images4.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_m.jpg',
  //       },
  //       {
  //         id: 2,
  //         name: 'Headset Gamer HyperX Cloud Stinger Core 7.1',
  //         price: 189.99,
  //         url: 'https://images2.kabum.com.br/produtos/fotos/147962/headset-gamer-hyperx-cloud-blue-ps4-hhsc2-fa-bl-n_1613658279_m.jpg',
  //       },
  //       {
  //         id: 3,
  //         name: 'Smart TV Samsung 60 Polegadas 4K',
  //         price: 3999.99,
  //         url: 'https://images1.kabum.com.br/produtos/fotos/171841/smart-tv-samsung-60-polegadas-4k-uhd-bluetooth-hdmi-usb-alexa-google-assistant-tela-infinita-cinza-titan-un60au7700gxzd_1667249574_m.jpg',
  //       },
  //     ],
  //   },
  // ];

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">My Purchase History</h1>
      <div className="grid grid-cols-5 gap-5">
        <div className="flex flex-col gap-10 col-span-4">
          {history.map((history) => (
            <Collapsible
              trigger={`Purchase made on ${history.date} R$ ${history.totalPrice} ↓`}
              className="p-4 rounded-sm font-semibold"
            >
              {history.items.map((item) => (
                <CartItem
                  name={item.name}
                  imgUrl={item.url}
                  price={item.price}
                  onRemove={() => {
                    toast('Item removed from cart');
                  }}
                />
              ))}
            </Collapsible>
          ))}
        </div>
      </div>
    </main>
  );
};

export default History;
