Exercício 1: Configurando o Contexto

Objetivo: Criar e configurar um contexto simples para armazenar e acessar um tema (claro/escuro) na aplicação.


Instruções:

- Crie o Contexto: Crie um novo arquivo ThemeContext.jsx e defina um contexto chamado ThemeContext.- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor ThemeContext.Provider e forneça um estado para o tema (claro ou escuro).
- Consuma o Contexto: Crie um componente chamado ThemeButton.jsx que consuma o contexto ThemeContext e mude seu estilo com base no tema fornecido.


Exercício 2: Contexto de Autenticação
Objetivo: Criar um contexto para gerenciar o estado de autenticação do usuário.


Instruções:

- Crie o Contexto: Crie um novo arquivo AuthContext.jsx e defina um contexto chamado AuthContext.- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor AuthContext.Provider e forneça um estado para o usuário (logado/deslogado).
- Consuma o Contexto: Crie dois componentes, LoginButton.jsx e LogoutButton.jsx, que consumam o contexto AuthContext e alterem o estado de autenticação do usuário.
- Exiba o Estado: Crie um componente UserStatus.jsx que consuma o contexto AuthContext e exiba uma mensagem informando se o usuário está logado ou deslogado.


Exercício 3: Carrinho de Compras
Objetivo: Criar um contexto para gerenciar o estado de um carrinho de compras.


Instruções:

- Crie o Contexto: Crie um novo arquivo CartContext.jsx e defina um contexto chamado CartContext.- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor CartContext.Provider e forneça um estado para os itens do carrinho.
- Consuma o Contexto: Crie um componente ProductList.jsx que exiba uma lista de produtos e um botão "Adicionar ao Carrinho" para cada produto. Esse botão deve adicionar o produto ao carrinho, utilizando o contexto CartContext.
- Exiba o Carrinho: Crie um componente Cart.jsx que consuma o contexto CartContext e exiba os itens adicionados ao carrinho.

Exercício 4: Contexto de Idioma


Objetivo: Criar um contexto para gerenciar o estado do idioma da aplicação.


Instruções:


- Crie o Contexto: Crie um novo arquivo LanguageContext.jsx e defina um contexto chamado LanguageContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor LanguageContext.Provider e forneça um estado para o idioma (por exemplo, 'en' para inglês e 'pt' para português).
- Consuma o Contexto: Crie um componente LanguageSwitcher.jsx que consuma o contexto LanguageContext e permita ao usuário alternar entre os idiomas disponíveis.

- Exiba o Idioma: Crie um componente Greeting.jsx que consuma o contexto LanguageContext e exiba uma saudação no idioma selecionado.
Exercício 5: Contexto de Preferências do Usuário


Objetivo: Criar um contexto para gerenciar as preferências do usuário, como o modo de exibição (lista ou grade).


Instruções:


- Crie o Contexto: Crie um novo arquivo UserPreferencesContext.jsx e defina um contexto chamado UserPreferencesContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor UserPreferencesContext.Provider e forneça um estado para as preferências do usuário.
- Consuma o Contexto: Crie um componente ViewModeSwitcher.jsx que consuma o contexto UserPreferencesContext e permita ao usuário alternar entre os modos de exibição (lista ou grade).

- Exiba os Itens: Crie um componente ItemList.jsx que consuma o contexto UserPreferencesContext e exiba os itens no modo de exibição selecionado pelo usuário.
Exercício 6: Contexto de Configurações de Notificações


Objetivo: Criar um contexto para gerenciar as configurações de notificações do usuário.


Instruções:


- Crie o Contexto: Crie um novo arquivo NotificationSettingsContext.jsx e defina um contexto chamado NotificationSettingsContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor NotificationSettingsContext.Provider e forneça um estado para as configurações de notificações (ativadas/desativadas).
- Consuma o Contexto: Crie um componente NotificationToggle.jsx que consuma o contexto NotificationSettingsContext e permita ao usuário ativar ou desativar as notificações.

- Exiba o Estado: Crie um componente NotificationStatus.jsx que consuma o contexto NotificationSettingsContext e exiba o estado atual das notificações.
Exercício 7: Contexto de Tema Dinâmico


Objetivo: Criar um contexto que permita ao usuário alterar dinamicamente o tema da aplicação.


Instruções:


- Crie o Contexto: Crie um novo arquivo DynamicThemeContext.jsx e defina um contexto chamado DynamicThemeContext.
-  Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor DynamicThemeContext.Provider e forneça um estado para o tema (por exemplo, várias opções de temas).
- Consuma o Contexto: Crie um componente ThemeSelector.jsx que consuma o contexto DynamicThemeContext e permita ao usuário selecionar um tema da lista de opções.

- Aplique o Tema: Crie um componente ThemedComponent.jsx que consuma o contexto DynamicThemeContext e aplique o tema selecionado ao seu estilo.
Exercício 8: Contexto de Dados do Perfil do Usuário


Objetivo: Criar um contexto para gerenciar os dados do perfil do usuário.


Instruções:


- Crie o Contexto: Crie um novo arquivo UserProfileContext.jsx e defina um contexto chamado UserProfileContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor UserProfileContext.Provider e forneça um estado para os dados do perfil do usuário (nome, e-mail, etc.).
- Consuma o Contexto: Crie um componente Profile.jsx que consuma o contexto UserProfileContext e exiba os dados do perfil do usuário.

- Atualize o Perfil: Crie um componente EditProfile.jsx que consuma o contexto UserProfileContext e permita ao usuário atualizar seus dados de perfil.
Exercício 9: Contexto de Favoritos


Objetivo: Criar um contexto para gerenciar uma lista de itens favoritos.


Instruções:


- Crie o Contexto: Crie um novo arquivo FavoritesContext.jsx e defina um contexto chamado FavoritesContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor FavoritesContext.Provider e forneça um estado para a lista de favoritos.
- Consuma o Contexto: Crie um componente AddToFavorites.jsx que consuma o contexto FavoritesContext e permita ao usuário adicionar itens à lista de favoritos.

- Exiba os Favoritos: Crie um componente FavoritesList.jsx que consuma o contexto FavoritesContext e exiba os itens favoritos do usuário.
Exercício 10: Contexto de Configurações de Idioma Avançadas


Objetivo: Criar um contexto que suporte a alteração dinâmica de idioma e região.


Instruções:


- Crie o Contexto: Crie um novo arquivo AdvancedLanguageContext.jsx e defina um contexto chamado AdvancedLanguageContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor AdvancedLanguageContext.Provider e forneça um estado para o idioma e a região.
- Consuma o Contexto: Crie um componente LanguageRegionSwitcher.jsx que consuma o contexto AdvancedLanguageContext e permita ao usuário alterar o idioma e a região.

- Exiba o Conteúdo: Crie um componente LocalizedContent.jsx que consuma o contexto AdvancedLanguageContext e exiba o conteúdo no idioma e na região selecionados.
Exercício 11: Contexto de Preferências de Layout

Objetivo: Criar um contexto para gerenciar as preferências de layout do usuário.


Instruções:


- Crie o Contexto: Crie um novo arquivo LayoutPreferencesContext.jsx e defina um contexto chamado LayoutPreferencesContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor LayoutPreferencesContext.Provider e forneça um estado para as preferências de layout (por exemplo, espaçamento, fontes, etc.).
- Consuma o Contexto: Crie um componente LayoutSwitcher.jsx que consuma o contexto LayoutPreferencesContext e permita ao usuário alterar suas preferências de layout.

- Aplique o Layout: Crie um componente StyledComponent.jsx que consuma o contexto LayoutPreferencesContext e aplique as preferências de layout ao seu estilo.
Exercício 12: Contexto de Histórico de Navegação


Objetivo: Criar um contexto para gerenciar o histórico de navegação do usuário.

Instruções:
- Crie o Contexto: Crie um novo arquivo NavigationHistoryContext.jsx e defina um contexto chamado NavigationHistoryContext.
- Forneça o Contexto: No componente raiz (App.jsx), envolva os componentes filhos com o provedor NavigationHistoryContext.Provider e forneça um estado para o histórico de navegação.
- Consuma o Contexto: Crie um componente NavigationTracker.jsx que consuma o contexto NavigationHistoryContext e adicione entradas ao histórico de navegação.
- Exiba o Histórico: Crie um componente HistoryList.jsx que consuma o contexto NavigationHistoryContext e exiba o histórico de navegação do usuário.