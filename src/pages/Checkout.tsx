export function Checkout() {
  return (
    <main>
      <form>
        <div>
          <h2>Complete seu pedido</h2>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
          <div>
            <input placeholder="CEP" type="text" />
            <input placeholder="Rua" type="text" />
            <input placeholder="Número" type="text" />
            <input placeholder="Complemento" type="text" />
            <input placeholder="Bairro" type="text" />
            <input placeholder="Cidade" type="text" />
            <input placeholder="UF" type="text" />
          </div>
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <div>
            <button type="button">CARTÃO DE CRÉDITO</button>
            <button type="button">CARTÃO DE DÉBITO</button>
            <button type="button">DINHEIRO</button>
          </div>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <div>
            <div> //Itens do carrinho aqui</div>
          </div>
          <div>
            <span>Total de Itens</span>
            <span>R$ 29,70</span>
            <span>Entrega </span>
            <span>R$ 3,50</span>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </div>
        <button type="submit"> Confirmar pedido</button>
      </form>
    </main>
  );
}
