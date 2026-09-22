Theorem triple_product_coordinates : forall a b c : Vec3,
  triple a b c =
    vx a * (vy b * vz c - vz b * vy c) +
    vy a * (vz b * vx c - vx b * vz c) +
    vz a * (vx b * vy c - vy b * vx c).
Proof.
  reflexivity.
Qed.

Theorem triple_product_cyclic : forall a b c : Vec3,
  triple a b c = triple b c a.
Proof.
  intros [ax ay az] [bx b_y bz] [cx cy cz].
  unfold triple, dot, cross.
  simpl.
  ring.
Qed.

Print Assumptions triple_product_coordinates.
Print Assumptions triple_product_cyclic.
