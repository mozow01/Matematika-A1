(** A kritikus irány egy adott elem A-tagságának eldönthetőségével.
    Nincs klasszikus import: az esetszétválasztás alapja explicit feltevés. *)

Section DeMorganDecidableMembership.

Variable U : Type.
Variables A B : SetU U.

Lemma set_de_morgan_membership_decidable :
  forall x : U,
    (x ∈ A \/ ~ (x ∈ A)) ->
    x ∈ (∁ (A ∩ B)) -> x ∈ ((∁ A) ∪ (∁ B)).
Proof.
  intros x membership_decision x_not_in_intersection.
  destruct membership_decision as [x_in_A | x_not_in_A].
  - (** Első eset: x eleme A-nak, ezért B-nek nem lehet eleme. *)
    right.
    intro x_in_B.
    apply x_not_in_intersection.
    split.
    + exact x_in_A.
    + exact x_in_B.
  - (** Második eset: x nem eleme A-nak. *)
    left. exact x_not_in_A.
Qed.

(** A teljes részhalmaztartalmazáshoz a döntési feltevés minden x-re kell. *)
Theorem set_complement_intersection_subset_union_decidable :
  (forall x : U, x ∈ A \/ ~ (x ∈ A)) ->
  (∁ (A ∩ B)) ⊆ ((∁ A) ∪ (∁ B)).
Proof.
  intros A_membership_decidable x x_not_in_intersection.
  exact (set_de_morgan_membership_decidable
    x (A_membership_decidable x) x_not_in_intersection).
Qed.

End DeMorganDecidableMembership.

Print Assumptions set_de_morgan_membership_decidable.
Print Assumptions set_complement_intersection_subset_union_decidable.
