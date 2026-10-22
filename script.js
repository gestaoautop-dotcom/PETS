// FAQ accordion
document.querySelectorAll('.faq .item').forEach(item=>{
  const b=item.querySelector('button');
  b.addEventListener('click',()=>{
    const open=item.classList.toggle('open');
    b.setAttribute('aria-expanded',open);
  });
});
// Formulários de contato
document.querySelectorAll('form[data-lead]').forEach(f=>{
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const name=f.elements.name.value.trim(),
          phone=f.elements.phone.value.replace(/\D/g,''),
          ok=f.elements.consent.checked,
          err=f.querySelector('.err');
    if(name.length<2) return err.textContent='Informe seu nome.';
    if(phone.length<10) return err.textContent='Informe um telefone válido com DDD.';
    if(!ok) return err.textContent='Aceite o tratamento de dados para continuar.';
    err.textContent='';
    // TODO: enviar para sua API: fetch('/api/lead',{method:'POST',body:JSON.stringify({name,phone})})
    f.innerHTML='<p class="ok">Recebemos seu pedido! Entraremos em contato em breve.</p>';
  });
});
