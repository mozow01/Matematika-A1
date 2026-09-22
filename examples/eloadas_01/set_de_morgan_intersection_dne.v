(** A kritikus irány: először csak a kettős negációt bizonyítjuk.
    Ez a lemma nem használ klasszikus elvet. *)

Section DeMorganDoubleNegation.

Variable U : Type.
Variables A B : SetU U.

Lemma set_de_morgan_membership_double_negation :
  forall x : U,
    x ∈ (∁ (A ∩ B)) -> ~ ~ (x ∈ ((∁ A) ∪ (∁ B))).
Proof.
  intros x x_not_in_intersection x_not_in_union_of_complements.
  assert (x_not_in_A : x ∈ (∁ A)).
  {
    intro x_in_A.
    assert (x_not_in_B : x ∈ (∁ B)).
    {
      intro x_in_B.
      apply x_not_in_intersection.
      split.
      - exact x_in_A.
      - exact x_in_B.
    }
    apply x_not_in_union_of_complements.
    right. exact x_not_in_B.
  }
  apply x_not_in_union_of_complements.
  left. exact x_not_in_A.
Qed.

End DeMorganDoubleNegation.

(** Az ellenőrző szerint ez a lemma axióma nélkül bizonyított. *)
Print Assumptions set_de_morgan_membership_double_negation.

(** A klasszikus könyvtár csak a következő lépéshez szükséges. *)
Require Import Coq.Logic.Classical_Prop.

Section DeMorganDoubleNegationElimination.

Variable U : Type.
Variables A B : SetU U.

Theorem set_complement_intersection_subset_union_dne :
  (∁ (A ∩ B)) ⊆ ((∁ A) ∪ (∁ B)).
Proof.
  intros x x_not_in_intersection.
  assert (membership_double_negation :
    ~ ~ (x ∈ ((∁ A) ∪ (∁ B)))).
  {
    exact (set_de_morgan_membership_double_negation
      U A B x x_not_in_intersection).
  }
  (** Kizárólag itt töröljük a már bizonyított kettős negációt. *)
  exact (NNPP (x ∈ ((∁ A) ∪ (∁ B))) membership_double_negation).
Qed.

End DeMorganDoubleNegationElimination.

(** Az NNPP a klasszikus könyvtárban a classic axiómára támaszkodik. *)
Print Assumptions set_complement_intersection_subset_union_dne.
