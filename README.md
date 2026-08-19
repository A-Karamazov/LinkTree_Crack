# Agartha Fit

Agartha Fit é um software de treino que serve como uma agenda pessoal para usuários que querem organizar sua rotina de treinos. O usuário poderá organizar seus programas a partir de uma base de dados com centenas de exercícios, focando em diferentes músculos, ou mesmo alongamentos e calistenia






Usuario
id
nome
sobrenome
email
senha

PlanoTreino
id
nome
descrição
data de criação
usuário proprietário

Treino
id
dia da semana
horário
nome
plano de treino

Exercicio
id
nome
descrição
imagem/video
grupo muscular
tipo (musculação, calistenia, alongamento)

ExercicioTreino
séries
repetições
intervalo
ordem
exercício
treino

Essa classe é importante porque um Treino possui vários Exercícios, e um Exercício pode aparecer em vários Treinos. É uma relação muitos-para-muitos.

Progresso
id
carga
repetições
data
exercício
usuário

Anotacao
id
texto
data
exercício
usuário

GrupoMuscular
id
nome
descrição

Recomendacao
id
exercício
usuário
motivo

E talvez mais 2, dependendo de como vocês implementarem

Midia
id
URL
tipo
exercício

Se vocês quiserem separar imagem e vídeo do Exercicio.

UsuarioExercicio
usuário
exercício

Isso seria útil se vocês realmente forem permitir que usuários cadastrem exercícios próprios e depois disponibilizá-los para os demais.
